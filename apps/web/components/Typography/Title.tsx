export default function Title(text: string | { text: string }) {
  const titleText = typeof text === "string" ? text : text.text;
  return (
    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center max-w-4xl leading-tight">
      {titleText}
    </h1>
  );
}
