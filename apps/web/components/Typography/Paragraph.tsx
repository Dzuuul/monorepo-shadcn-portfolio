export default function Paragraph({
  text,
  className,
}: {
  text: string | { text: string };
  className?: string;
}) {
  const titleText = typeof text === "string" ? text : text.text;
  return (
    <p
      className={`${className} text-lg text-center max-w-xl leading-tight px-5 md:px-0`}
    >
      {titleText}
    </p>
  );
}
