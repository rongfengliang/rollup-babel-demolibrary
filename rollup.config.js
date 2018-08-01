import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
export default {
    input: 'src/user.js',
    output: [{
            file: 'bundle.js',
            format: 'cjs',
            banner:"// license under apache dalaongrong@qq.com",
        },
        {
            file: 'app.js',
            format: 'umd',
            name:"appdemo",
            banner:"// license under apache dalaongrong@qq.com",
        }
    ],
    plugins: [
        uglify(),
        nodeResolve({
          jsnext: false,
          main: true,
          browser: true
        }),
        babel({
            exclude: 'node_modules/**' // only transpile our source code
        }),
        commonjs({
          // non-CommonJS modules will be ignored, but you can also
          // specifically include/exclude files
          include: 'node_modules/**',  // Default: undefined
          exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
          // these values can also be regular expressions
          // include: /node_modules/
    
          // search for files other than .js files (must already
          // be transpiled by a previous plugin!)
          extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]
    
          // if true then uses of `global` won't be dealt with by this plugin
          ignoreGlobal: false,  // Default: false
    
          // if false then skip sourceMap generation for CommonJS modules
          sourceMap: false,  // Default: true
    
          // explicitly specify unresolvable named exports
          // (see below for more details)
          namedExports: { './module.js': ['foo', 'bar' ] },  // Default: undefined
    
          // sometimes you have to leave require statements
          // unconverted. Pass an array containing the IDs
          // or a `id => boolean` function. Only use this
          // option if you know what you're doing!
          ignore: [ 'conditional-runtime-dependency' ]
        })
      ]
};