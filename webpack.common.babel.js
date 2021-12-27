// eslint-disable-next-line import/no-extraneous-dependencies
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import HtmlWebpackPlugin from 'html-webpack-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// eslint-disable-next-line import/no-extraneous-dependencies
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import CopyPlugin from 'copy-webpack-plugin';

export default {
    // Configure entry points
    entry: './src/index.tsx',

    // Plugins can be used by the module configs
    plugins: [
    // Clean output dir before every build
        new CleanWebpackPlugin(),
        // Node polyfills incase node libs are used.
        // new NodePolyfillPlugin(),
        // Extract css into one css file
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: 'src/public', to: '' },
            ],
        }),
    ],

    output: {
    // Used for clean plugin
        path: path.resolve('dist'),
        // Split bundle in chunks for smaller entrypoint
        filename: '[name].bundle.js',
        // Put images in sepperate folder
        assetModuleFilename: 'images/[hash][ext][query]',
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },

    // Configure loaders. Object for each config
    module: {
    // The "use" property array is run from right to left.
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                // Test for CSS files
                test: /\.css$/i,
                // Load CSS files with css-loader and pipe them to MiniCssExtractPlugin
                use: [
                    MiniCssExtractPlugin.loader,
                    'style-loader', // Includes the css in the DOM
                    'css-loader', // Converts css files to inline string
                    // 'postcss-loader',     // Change css format/add stuff before using
                ],
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf)$/,
            //     use: [{
            //         loader: 'url-loader',
            //         options: {
            //             limit: 10000,
            //             name: './font/[hash].[ext]',
            //             mimetype: 'application/font-woff',
            //         },
            //     }],
            // },
            {
                // Test for Regex - End in .js and .jsx
                test: /\.jsx?$/,
                exclude: /node_modules/,
                // Load and transpile
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
        ],
    },

    // Resolve extensions and aliases
    resolve: {
        modules: [path.join(import.meta.url, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.css', '.ts', '.tsx'],
    },
};
