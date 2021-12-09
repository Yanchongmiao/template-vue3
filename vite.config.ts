import { defineConfig } from "vite";
import path from 'path';
import vue from '@vitejs/plugin-vue';
import { viteMockServe } from "vite-plugin-mock";
module.exports = {
  base: "",
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "./src/mock", //mock文件地址
      localEnabled: true, // 开发打包开关
      prodEnabled: false, // 生产打包开关
      // 这样可以控制关闭mock的时候不让mock打包到最终代码内
      injectCode: `
        import { setupProdMockServer } from './mockProdServer';
        setupProdMockServer();
      `,
      logger: true, //是否在控制台显示请求日志
      supportTs: true //打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "./src/assets/style/main.scss";'
      }
    }
  },
  resolve: {
    alias: {
      // "@": pathResolve("src"),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  optimizeDeps: {
    include: ['axios'],
  },
  build: {
    target: 'modules',
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'terser' // 混淆器
  },
  module: {
    relus: [
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
    ]
  },
  server: {
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',   //代理接口
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/news': {
        target: 'http://poetry.apiopen.top',   //代理接口
        changeOrigin: true,
      },
    }
  }
}