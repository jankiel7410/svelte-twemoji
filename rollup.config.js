import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
    
const pkg = require('./package.json');
    
export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            name: 'Name',
            globals: {
                'twemoji': 'twemoji',
                'svelte': 'svelte',
            }
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        typescript(),
        commonjs(),
    ],
};
