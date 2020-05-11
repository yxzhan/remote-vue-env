module.exports = {
  // ...
  configureWebpack: {
    devtool: 'source-map'
  },
  devServer: {
    host: 'localhost',
    port: 8080, // CHANGE YOUR PORT HERE!
    hotOnly: false,
  },
  // ...
}