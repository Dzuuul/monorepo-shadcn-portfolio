export default function SubTitle(text: string | { text: string }) {
  const titleText = typeof text === "string" ? text : text.text;
  return (
    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-tight px-5 lg:px-0">
      {titleText}
    </h2>
  );
}
