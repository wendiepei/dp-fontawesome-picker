const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  configureWebpack: {
    output: {
      libraryExport: 'default' // 确保库的默认导出
    }
  },

  // 禁止将 CSS 提取到单独的文件中
  css: {
    extract: false // 保证样式会内联到组件中
  },

  // 使用 Vue CLI 提供的库模式进行打包
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output
          .filename('dp-fontawesome-picker.min.js') // 生成的文件名
          .library('DpFontawesomePicker') // 库名
          .libraryTarget('umd') // 输出格式
          .umdNamedDefine(true); // 命名模块的定义
    }
  }
})
