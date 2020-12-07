module.exports = {
  lintOnSave: false,
  // 修改title文字
  chainWebpack: config =>{
    config.plugin('html')
      .tap(args => {
        args[0].title = "移动app";
        return args;
      })
  },
  // 修改title图标
    pwa: {
      iconPaths: {
        favicon32: 'favicon.ico',
        favicon16: 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon: 'favicon.ico',
        msTileImage: 'favicon.ico'
      }
    }
}
