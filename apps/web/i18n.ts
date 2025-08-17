import { getRequestConfig } from "next-intl/server";

// Can be imported from a shared config
export const locales = ["en", "id"];
const defaultLocale = "en";

export default getRequestConfig(async ({ locale }) => {
  const currentLocale = locale || defaultLocale;
  return {
    messages: (await import(`./messages/${currentLocale}.json`)).default,
    locale: currentLocale as string,
  };
});
