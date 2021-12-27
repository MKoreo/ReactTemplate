// eslint-disable-next-line import/no-extraneous-dependencies
import { merge } from 'webpack-merge';
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
// eslint-disable-next-line import/extensions
import common from './webpack.common.babel.js';
// eslint-disable-next-line import/no-extraneous-dependencies

export default merge(common, {
    mode: 'production',

    // Global constants
    plugins: [
        new webpack.DefinePlugin({
            'process.env.mode': JSON.stringify('development'),
        }),
    ],

    output: {
        libraryTarget: 'umd',
        library: 'ui-lib',
    },

    // Dev Server: code refers to src instead of compiled/transpiled code
    devtool: 'source-map',
    externals: {
        react: 'react',
        'react-dom': 'react-dom',
    },
});
