import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import styleImport from 'vite-plugin-style-import'
import ViteComponents, { ElementPlusResolver } from 'vite-plugin-components'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue': "vue/dist/vue.esm-bundler.js"
    }
  },
  plugins: [
    vue(),
    viteCompression(),
    ViteComponents({
      customComponentResolvers:[ElementPlusResolver()]
    }),
    styleImport({
      libs:[
        {
          libraryName:'element-plus',
          esModule:true,
          resolveStyle:(name) => {
            return `element-plus/theme-chalk/${name}.css`
          }
        }
      ]
    })
  ],
  base: './',
  build:{
    brotliSize:true
  },
  // server:{
  //   host:'0.0.0.0',
  //   port:6000,
  //   https:true,
  //   force:true
  // }
})

