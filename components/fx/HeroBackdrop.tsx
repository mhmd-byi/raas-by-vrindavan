"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

function canUseWebGL() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

/** Static photo first (fast LCP, no-JS and reduced-motion fallback); the WebGL scene fades in over it. */
export default function HeroBackdrop({ src, alt = "" }: { src: string; alt?: string }) {
  const wrap = useRef<HTMLDivElement>(null);
  const [webgl, setWebgl] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- feature detection is only possible after mount
    if (!reduce && canUseWebGL()) setWebgl(true);
  }, []);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0">
      <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
      {webgl && (
        <div className="absolute inset-0 animate-[fadein_1.2s_ease-out_both]">
          <HeroScene src={src} active={visible} />
        </div>
      )}
    </div>
  );
}
