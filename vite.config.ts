import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postcsspxtorem from 'postcss-pxtorem'
import postcsspxtoviewport from 'postcss-px-to-viewport'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        // postcsspxtorem({
        //   rootValue: 100, // UI设计搞的宽度/10
        //   unitPrecision: 3, // 转rem精确到小数点多少位
        //   propList: ['*'], // 需要转换的属性 *表示所有
        //   // selectorBlackList: ['ignore']
        // })
        postcsspxtoviewport({
          unitToConvert: "am", // 要转化的单位
          viewportWidth: 750, // UI设计稿的宽度
          unitPrecision: 6, // 转换后的精度，即小数点位数
          propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
          viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
          fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
          selectorBlackList: ["ignore-"], // 指定不转换为视窗单位的类名，
          minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
          mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
          replace: true, // 是否转换后直接更换属性值
          landscape: false, // 是否处理横屏情况
        }),
      ]
    }
  }
})
