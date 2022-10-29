/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

(module.exports = nextConfig),
  {
    reactStrictMode: true,
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: "@svgr/webpack",
      });
      return config;
    },
  };
