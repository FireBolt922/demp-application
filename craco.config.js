const CracoAntDesignPlugin = require('craco-antd');
const CracoEsbuildPlugin = require('craco-esbuild');

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: { customizeThemeLessPath: './antd.customize.less' },
    },
    {
      plugin: CracoEsbuildPlugin,
      options: {
        enableSvgr: true, // Optional.
        esbuildLoaderOptions: {
          loader: 'jsx',
          target: 'es2015',
        },
      },
    },
  ],
};
