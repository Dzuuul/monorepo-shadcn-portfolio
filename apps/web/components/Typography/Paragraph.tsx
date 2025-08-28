import { Highlighter } from "@workspace/ui/components/magicui/highlighter";

export default function Paragraph({
  text,
  className,
}: {
  text: string | { text: string };
  className?: string;
}) {
  const titleText = typeof text === "string" ? text : text.text;

  // Split teks berdasarkan underscore pattern, sekaligus ambil delimiter
  const parts = titleText.split(/(?<!\S)_(.+?)_(?!\S)/g);

  // Hasil: [ 'Halo ', 'kamu', ' di sini!' ]
  // Indeks ganjil (1, 3, 5, ...) adalah isi dalam underscore

  return (
    <p
      className={`${className} text-lg text-center max-w-xl leading-tight px-5 md:px-0`}
    >
      {parts.map((part, index) => {
        // Jika index ganjil → bagian dalam underscore → jadi button
        if (index % 2 === 1) {
          return (
            <Highlighter key={index} action="underline" color="#FF9800">
              {part}
            </Highlighter>
          );
        }
        // Jika genap → teks biasa
        return <span key={index}>{part}</span>;
      })}
    </p>
  );
}
