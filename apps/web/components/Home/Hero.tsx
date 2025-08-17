import Image from "next/image";

export default function Hero() {
  return (
    <Image
      src="/preview-project.svg"
      width={800}
      height={800}
      alt="Preview Porto"
      className="z-10 hidden lg:block"
    />
  );
}
