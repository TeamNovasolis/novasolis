module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel', 'react-native-reanimated/plugin'],
    env: {
      production: {
        plugins: ['react-native-paper/babel']
      }
    }
  };
};
