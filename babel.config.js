module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3, // or 2,
        targets: {
          firefox: '64', // or whatever target to choose .
        },
      },
    ],
  ],
};
