import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin('./i18n.ts');
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.justinmind.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};
 
export default withNextIntl(nextConfig);
