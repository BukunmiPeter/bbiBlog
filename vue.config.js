module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg');

    // Clear existing rules for SVG
    svgRule.uses.clear();

    // Add vue-svg-inline-loader
    svgRule
      .use('vue-svg-inline-loader')
      .loader('vue-svg-inline-loader');
  },
};