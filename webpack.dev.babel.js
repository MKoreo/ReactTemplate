// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack';
// eslint-disable-next-line import/no-extraneous-dependencies
import { merge } from 'webpack-merge';
// eslint-disable-next-line import/no-extraneous-dependencies
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
// eslint-disable-next-line import/extensions
import common from './webpack.common.babel.js';

export default merge(common, {
    mode: 'development',

    // Global constants
    plugins: [
        new webpack.DefinePlugin({
            'process.env.mode': JSON.stringify('development'),
        }),
        new ReactRefreshWebpackPlugin(),
    ],

    // Dev Server: code refers to src instead of compiled/transpiled code
    devtool: 'inline-source-map',
    // Dev Server: Served from ./dist folder
    devServer: {
        static: './dist',
        port: 3000,
        // Enable adress bar functionality for react-router
        historyApiFallback: {
            rewrites: [
                { from: /^.*\/main\.js$/, to: '/main.js' },
            ],
        },
        // Enable hot reloading
        hot: true,
    },
});
