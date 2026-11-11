import Image from "next/image";

/** The hero photo, filling its container. */
export default function HeroBackdrop({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div className="absolute inset-0">
      <Image src={src} alt={alt} fill priority sizes="100vw" className="object-cover" />
    </div>
  );
}
