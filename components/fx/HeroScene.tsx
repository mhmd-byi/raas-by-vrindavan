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
    float vig = smoothstep(1.15, 0.25, distance(vUv, vec2(0.5)));
    c.rgb *= mix(0.55, 1.0, vig);
    gl_FragColor = vec4(c.rgb, 1.0);
    #include <colorspace_fragment>
  }
`;

const dustVertex = /* glsl */ `
  attribute float aSeed;
  uniform float uTime;
  uniform vec2 uSize;
  uniform float uScale;
  varying float vTwinkle;
  void main() {
    vec3 p = position;
    p.x *= uSize.x;
    float h = uSize.y + 1.0;
    p.y = mod(position.y * uSize.y + uTime * (0.08 + aSeed * 0.18) + h * 0.5, h) - h * 0.5;
    p.x += sin(uTime * 0.5 + aSeed * 40.0) * 0.18;
    vec4 mv = modelViewMatrix * vec4(p, 1.0);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = (2.0 + aSeed * 7.0) * uScale / -mv.z;
    vTwinkle = 0.5 + 0.5 * sin(uTime * (1.0 + aSeed * 2.0) + aSeed * 30.0);
  }
`;

const dustFragment = /* glsl */ `
  varying float vTwinkle;
  void main() {
    float d = length(gl_PointCoord - 0.5);
    float a = smoothstep(0.5, 0.0, d) * (0.25 + 0.75 * vTwinkle);
    gl_FragColor = vec4(1.0, 0.82, 0.45, a);
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

// Deterministic pseudo-random in [0, 1) so the particle layout is stable across renders.
const rand = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

function GoldDust({ count = 160 }: { count?: number }) {
  const { viewport } = useThree();
  const material = useRef<THREE.ShaderMaterial>(null);
  const { positions, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = rand(i * 4 + 1) - 0.5;
      positions[i * 3 + 1] = rand(i * 4 + 2) - 0.5;
      positions[i * 3 + 2] = rand(i * 4 + 3) * 2.5 - 0.5;
      seeds[i] = rand(i * 4 + 4);
    }
    return { positions, seeds };
  }, [count]);

  const initial = useMemo(
    () => ({ uTime: { value: 0 }, uSize: { value: new THREE.Vector2(1, 1) }, uScale: { value: 300 } }),
    [],
  );

  useFrame((state) => {
    const u = material.current?.uniforms;
    if (!u) return;
    u.uTime.value = state.clock.elapsedTime;
    u.uSize.value.set(viewport.width, viewport.height);
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aSeed" args={[seeds, 1]} />
      </bufferGeometry>
      <shaderMaterial
        ref={material}
        uniforms={initial}
        vertexShader={dustVertex}
        fragmentShader={dustFragment}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
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
      <GoldDust />
    </Canvas>
  );
}
