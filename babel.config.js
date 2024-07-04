module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel', // Plugin for NativeWind
      [
        'module:dotenv',
        {
          path: '.env',
          safe: true,
          allowUndefined: true,
        },
      ],
    ],
  };
};
