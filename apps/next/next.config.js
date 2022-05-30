/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: '.',
  // reactStrictMode: true,
  webpack5: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
}

const { withExpo } = require('@expo/next-adapter')
const withFonts = require('next-fonts')
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')([
  'solito',
  'dripsy',
  '@dripsy/core',
  'moti',
  '@motify/core',
  '@motify/components',
  'app', //Shared app code
  'react-native-web',
  'react-native-svg',
  'native-base',
  'react-native-svg',
])

module.exports = withPlugins(
  [
    withTM,
    [withFonts, { projectRoot: __dirname }],
    [withExpo, { projectRoot: __dirname }],
  ],
  nextConfig
)
