import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
    
const pkg = require('./package.json');
    
export default {
    input: './src/index.ts',
    output: 
        {
            format: 'cjs',
            dir: 'dist',
            name: 'Name',
            exports: 'named',
            globals: {
                'twemoji': 'twemoji',
                'svelte': 'svelte',
            }
        }
    ,
    plugins: [
        peerDepsExternal(),
        resolve(),
        typescript(),
        commonjs({sourceMap: true, extensions: ['.ts', '.js']}),
    ],
};
