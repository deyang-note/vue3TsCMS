const path = require("path")
const { defineConfig } = require("@vue/cli-service")
const AutoImport = require("unplugin-auto-import/webpack")
const Components = require("unplugin-vue-components/webpack")
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers")

module.exports = defineConfig({
  transpileDependencies: true,
  // 配置方式一：CLI提供的属性配置
  outputDir: "./build",
  // publicPath: "./",
  // 配置方式二：和webpack属性完全一致，最后会进行合并
  devServer: {
    proxy: {
      "^/api": {
        target: "http://152.136.185.210:4000",
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true
      }
    },
    historyApiFallback: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: "@/components"
      }
    }
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     "@": path.resolve(__dirname, "src"),
  //     components: "@/components"
  //   }
  // }
  // 配置方式三：
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", path.resolve(__dirname, "src"))
      .set("components", "@/components")
    config
      .plugin("AutoImport")
      .use(AutoImport({ resolvers: [ElementPlusResolver()] }))
    config
      .plugin("Components")
      .use(Components({ resolvers: [ElementPlusResolver()] }))
  }
})
