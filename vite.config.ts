import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite'
import { viteMockServe } from "vite-plugin-mock"
import { resolve } from 'path'
import pxToViewport from 'postcss-px-to-viewport'
import autoprefixer from 'autoprefixer'
// https://vitejs.dev/config/
export default defineConfig((ConfigEnv) => {
  const isDev = ConfigEnv.mode === 'development'
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [VantResolver()],
      }),
      AutoImport({
        imports: ['vue'],
      }),
      viteMockServe({
        mockPath: './mock',
        localEnabled: isDev,
        //  这样可以控制关闭mock的时候不让mock打包到最终代码内
        // injectCode: `
        //   import { setupProdMockServer } from './mockProdServer';
        //   setupProdMockServer();
        // `,
      })
    ],
    css: {
      postcss: {
        plugins: [
          // https://github.com/evrone/postcss-px-to-viewport/blob/master/README_CN.md
          pxToViewport({
            // 转换单位
            unitToConvert: 'px',
            // 窗口宽度
            viewportWidth: 375,
            // 单位转换后保留的精度
            unitPrecision: 5,
            propList: ['*'],
            viewportUnit: 'vw',
            fontViewportUnit: 'vw',
            selectorBlackList: [],
            minPixelValue: 1,
            mediaQuery: false,
            replace: true,
            exclude: undefined,
            include: undefined,
            landscape: false,
            landscapeUnit: 'vw',
            landscapeWidth: 568
          }),
          autoprefixer({
          })
        ]
      }
    },

    server: {
      host: '0.0.0.0',
      port: 1003
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      }
    },
    esbuild: {
      drop: isDev ? [] : ["console", "debugger"],
    },
    build: {
      outDir: './dist/project',
      emptyOutDir: true,
      rollupOptions: {
        output: {
          manualChunks(id) {
            // 将node_modules的扩展单独进行打包
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          },
          // experimentalMinChunkSize: 1024 * 1024 * 10
        },
      },
    }
  }
})
