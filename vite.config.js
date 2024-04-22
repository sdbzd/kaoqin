import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { resolve } from 'path'
// import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //ElementPlus()
    AutoImport({
      // resolvers: [ElementPlusResolver()]
      //使用Element-plus的自动导入时
      resolvers: [ElementPlusResolver({
        exclude: /^ElAmap[A-Z]*/
      }),VueAmapResolver()],
    }),
    Components({
      // resolvers: [ElementPlusResolver()],
      // 
      // 
      // 使用Element-plus的自动导入时
      resolvers: [ElementPlusResolver({
        exclude: /^ElAmap[A-Z]*/
      }),VueAmapResolver()],
    }),
    
  
  ],
  resolve: {
    // 设置路径别名
    alias: {
      '@': resolve(__dirname, './src'),
      '*': resolve('')
    },
  }
})
