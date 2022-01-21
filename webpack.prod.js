// eslint-disable-next-line import/no-extraneous-dependencies
import { merge } from 'webpack-merge';
// eslint-disable-next-line import/extensions
import common from './webpack.js';

export default merge(common, {
    mode: 'production',

    // Configure entry points
    entry: './src/index.tsx',

    // Output library
    output: {
        filename: 'index.mjs',
    },
    // Library depends on external libs
    // See peerDependencies in package.json
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
});
