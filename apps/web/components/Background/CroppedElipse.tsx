import Image from "next/image";

export function CroppedElipse() {
  return (
    <Image
      src="/cropped-elipse.svg"
      width={886}
      height={1300}
      alt="Background Component"
      className="absolute top-0 right-0 -z-50 object-contain pointer-events-none"
      priority
      unoptimized
    />
  );
}
