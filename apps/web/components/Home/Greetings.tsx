import Image from "next/image";
import { Paragraph } from "../Typography";
import { PointerHighlight } from "@workspace/ui/components/pointer-highlight";

export default function Greetings({
  text,
}: {
  text: string | { text: string };
}) {
  return (
    <div className="mt-8">
      {/* Greetings */}
      <div className="relative inline-flex items-center justify-center">
        <PointerHighlight
          rectangleClassName="bg-blue-100 dark:bg-blue-900 border-blue-300 dark:border-blue-700 leading-loose"
          pointerClassName="text-blue-500 h-3 w-3"
          containerClassName="inline-block mx-1"
        >
          <Paragraph
            text={text}
            className="relative z-10 px-8 py-0 font-semibold"
          />
        </PointerHighlight>
      </div>
    </div>
  );
}
