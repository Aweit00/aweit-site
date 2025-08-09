/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
export default {
  reactStrictMode: true,
  output: 'export',
  basePath: isProd ? '/aweit-site' : '',
  assetPrefix: isProd ? '/aweit-site/' : '',
  images: { unoptimized: true },
  trailingSlash: true
};
