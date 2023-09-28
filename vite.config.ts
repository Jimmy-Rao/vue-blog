/*
 * @Author: Ayan
 * @Date: 2023-09-26 23:05:38
 * @LastEditors: Ayan
 * @LastEditTime: 2023-09-26 23:14:49
 * @Description: file not
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置@指向src目录
    }
  },
  base: './dist', // 设置打包路径
  server: {
    port: 8080, // 设置服务器端口号
    open: true, // 设置服务器启动时是否自动打开浏览器
    cors: true // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})
