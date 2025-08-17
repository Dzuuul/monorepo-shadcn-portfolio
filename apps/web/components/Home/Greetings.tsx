import Image from "next/image";
import { Paragraph } from "../Typography";

export default function Greetings(text: string | { text: string }) {
  return (
    <div className="mt-8">
      {/* Greetings */}
      <div className="relative inline-flex items-center justify-center">
        <Image
          src="/greeting-border.svg"
          width={150}
          height={150}
          alt="Border"
          className="absolute w-auto h-auto max-w-[150px] max-h-[150px] object-contain"
        />

        <Paragraph
          text={text}
          className="relative z-10 px-8 py-0 font-semibold"
        />
      </div>
    </div>
  );
}
