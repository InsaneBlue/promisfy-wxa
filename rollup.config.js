import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify'

const input = 'src/index.js'
const plugins = [
  resolve(),
  commonjs(),
  buble(),
]

const demoConf = {
  input,
  plugins,
  output: [
    {
      file: 'demo/libs/promisify-wxa.js',
      format: 'cjs',
    }
  ]
}

const commonConf = {
  input,
  plugins,
  output: [
    {
      file: 'dist/promisify-wxa.js',
      format: 'cjs',
    },
    {
      file: 'dist/promisify-wxa.es.js',
      format: 'es',
    }
  ]
}

const minConf = {
  input,
  plugins: plugins.concat(uglify()),
  output: [
    {
      file: 'demo/libs/promisify-wxa.min.js',
      format: 'cjs',
    },
    {
      file: 'dist/promisify-wxa.es.min.js',
      format: 'es',
    }
  ]
}

export default [
  demoConf,
  commonConf,
  // minConf
]