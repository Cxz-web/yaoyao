const CompressionPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const isAnalysisMode = process.env.STAGE === 'analysis';


console.log(isAnalysisMode)

/* eslint-disable */
module.exports = { 
  publicPath: process.env.DEV_PUBLIC_URL,

  productionSourceMap: false,

  lintOnSave: false,

  configureWebpack: config => {
    if(isAnalysisMode) {
      return {plugins: [
        new BundleAnalyzerPlugin({
          analyzerPort: Number(8300) - 1,
        })
      ]} 
    }


    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            algorithm: 'gzip',
            test: /\.(js|css)$/,// 匹配文件名
            threshold: 10240, // 对超过10k的数据压缩
            deleteOriginalAssets: false, // 不删除源文件
            minRatio: 0.8 // 压缩比
          })
        ]
      }
    }
  }
}