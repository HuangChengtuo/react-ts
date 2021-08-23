const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  webpack: (config, { dev }) => {
    if (!dev) {
      config.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static' }))
    }
    return config
  }
}
