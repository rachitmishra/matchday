/** @type {import('next').NextConfig} */
const path = require('path');
const stylexPlugin = require("@stylexjs/nextjs-plugin");

const nextConfig = {
    experimental: {
        typedRoutes: true,
      },
};

module.exports = stylexPlugin({
  filename: 'stylex-bundle.css',
  rootDir: __dirname,
  useCSSLayers: true,
  aliases: {
    '@/*': [path.join(__dirname, '*')],
  },
})(nextConfig);