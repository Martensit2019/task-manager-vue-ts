import { fileURLToPath, URL } from 'node:url'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      types: [
        {
          from: 'vue',
          names: ['component']
        }
      ],
      dirs: ['src/components', 'src/layouts']
    }),
    AutoImport({
      eslintrc: {
        enabled: true
      },
      dts: true,
      imports: ['vue', 'vue-router', 'pinia']
    }),
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      symbolId: 'icon-[dir]-[name]',
      inject: 'body-last',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
            @import "./src/assets/styles/main.scss";
            `,
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})

