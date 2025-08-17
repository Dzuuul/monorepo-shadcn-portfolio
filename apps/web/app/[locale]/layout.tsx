import { notFound } from "next/navigation";
import { locales } from "@/i18n"; // Import locales dari i18n.ts
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await (params as unknown as Promise<{ locale: string }>);
  if (!locales.includes(locale as any)) notFound();

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
