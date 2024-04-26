import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VueAmapResolver } from "@vuemap/unplugin-resolver";
import { resolve } from "path";

import basicSsl from '@vitejs/plugin-basic-ssl'
// import ElementPlus from 'unplugin-element-plus/vite'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host:true,
    https:true,
  },
  plugins: [
    vue(),
    basicSsl(),
    //ElementPlus()
    AutoImport({
      // resolvers: [ElementPlusResolver()]
      //使用Element-plus的自动导入时
      resolvers: [
        ElementPlusResolver({
          exclude: /^ElAmap[A-Z]*/,
        }),
        VueAmapResolver(),
      ],
    }),
    Components({
      // resolvers: [ElementPlusResolver()],
      //
      //
      // 使用Element-plus的自动导入时
      resolvers: [
        ElementPlusResolver({
          exclude: /^ElAmap[A-Z]*/,
        }),
        VueAmapResolver(),
      ],
    }),
  ],
  resolve: {
    // 设置路径别名
    alias: {
      "@": resolve(__dirname, "./src"),
      "*": resolve(""),
    },
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue'
        },
        // manualChunks 配置
        cssCodeSplit: false,
        assetFileNames: (assetInfo) => {
          var info = assetInfo.name.split(".");
          var extType = info[info.length - 1];
          if (
            /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/i.test(assetInfo.name)
          ) {
            extType = "media";
          } else if (/\.(png|jpe?g|gif|svg)(\?.*)?$/.test(assetInfo.name)) {
            extType = "img";
          } else if (/\.(woff2?|eot|ttf|otf)(\?.*)?$/i.test(assetInfo.name)) {
            extType = "fonts";
          }
          return `static/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-index-[hash].js",
        manualChunks: {
          'element-plus': ['element-plus']
        },
      },
    },
  },
});
