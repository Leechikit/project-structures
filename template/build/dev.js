const merge = require('webpack-merge')
const baseConfig = require('./base')

module.exports = merge(baseConfig, {
  devServer: {
    proxy: {
      '/ctg-workflow': {
        // target: 'http://10.142.233.66:8080',
        target: 'http://180.107.140.120:8104',
        changeOrigin: true
      }
    }
  }
})
