/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

/*module.exports = nextConfig;*/
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'ru',
  },
};
