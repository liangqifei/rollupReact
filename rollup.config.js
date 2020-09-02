// rollup.config.js
import babel from 'rollup-plugin-babel'
import { uglify } from 'rollup-plugin-uglify'
// uglify(),
import postcss from 'rollup-plugin-postcss';
import cModuleMap from './cModuleMap'
import cModuleMapCss from './sss'
import clear from 'rollup-plugin-clear';
export default {
  // 核心选项
  input: { index:'src/index.js', ...cModuleMap},     // 必须
  external: ['react'],
  plugins: [babel({
    exclude: 'node_modules/**', // 只编译源代码
    runtimeHelpers: true
  }), clear({
    targets: ['lib']
  }), postcss({ modules: true, inject:true}), uglify()],

  output: {  // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项r:'',
    dir:'lib',
    // file: 'bundle.js',    // 必须
    format: 'cjs',  // 必须
    name:'myplugin'
  },
};