// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

module.exports = {
  ...getDefaultConfig(__dirname),
  resolver: {
    assetExts: ['db', 'mp3', 'ttf', 'png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'bmp', 'tiff', 'gltf'],
  }
}