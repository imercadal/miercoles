/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['es', 'pt'],
    defaultLocale: 'es',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; frame-src 'self' https://player.vimeo.com; script-src 'self'; style-src 'self'; img-src 'self'; media-src 'self' https://player.vimeo.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
