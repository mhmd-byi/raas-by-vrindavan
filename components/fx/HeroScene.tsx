"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const IMAGE_ASPECT = 1.5;

const planeVertex = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

// The photo as a plane: cover-fit, pointer parallax, gentle water-like ripple and a pointer ripple.
const planeFragment = /* glsl */ `
  uniform sampler2D uTex;
  uniform float uTime;
  uniform float uAspect;
  uniform vec2 uMouse;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    if (uAspect > 1.0) uv.y = (uv.y - 0.5) / uAspect + 0.5;
    else uv.x = (uv.x - 0.5) * uAspect + 0.5;
    uv = (uv - 0.5) * 0.92 + 0.5;
    uv += uMouse * 0.018;

    vec2 m = uMouse * 0.5 + 0.5;
    float d = distance(vUv, m);
    float ripple = sin(d * 38.0 - uTime * 3.0) * exp(-d * 5.0) * 0.006;
    uv += normalize(vUv - m + 0.0001) * ripple;
    uv.x += sin(uv.y * 26.0 + uTime * 0.9) * 0.0016;
    uv.y += sin(uv.x * 22.0 + uTime * 0.7) * 0.0016;

    vec4 c = texture2D(uTex, uv);
    gl_FragColor = vec4(c.rgb, 1.0);
    #include <colorspace_fragment>
  }
`;

function PhotoPlane({ src }: { src: string }) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);

  useEffect(() => {
    let cancelled = false;
    new THREE.TextureLoader().load(src, (t) => {
      t.colorSpace = THREE.SRGBColorSpace;
      if (!cancelled) setTexture(t);
    });
    return () => {
      cancelled = true;
    };
  }, [src]);

  return texture ? <PhotoMesh texture={texture} /> : null;
}

function PhotoMesh({ texture }: { texture: THREE.Texture }) {
  const { viewport, pointer } = useThree();
  const material = useRef<THREE.ShaderMaterial>(null);
  const mouse = useRef(new THREE.Vector2());
  const initial = useMemo(
    () => ({
      uTex: { value: texture },
      uTime: { value: 0 },
      uAspect: { value: 1 },
      uMouse: { value: new THREE.Vector2() },
    }),
    [texture],
  );

  useFrame((state) => {
    const u = material.current?.uniforms;
    if (!u) return;
    mouse.current.lerp(pointer, 0.05);
    u.uMouse.value.copy(mouse.current);
    u.uTime.value = state.clock.elapsedTime;
    u.uAspect.value = viewport.width / viewport.height / IMAGE_ASPECT;
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial ref={material} uniforms={initial} vertexShader={planeVertex} fragmentShader={planeFragment} toneMapped={false} />
    </mesh>
  );
}

export default function HeroScene({ src, active }: { src: string; active: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 5], fov: 50 }}
      gl={{ antialias: false, powerPreference: "high-performance" }}
      eventSource={typeof document !== "undefined" ? document.body : undefined}
      eventPrefix="client"
    >
      <PhotoPlane src={src} />
    </Canvas>
  );
}
