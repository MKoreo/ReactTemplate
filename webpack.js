// eslint-disable-next-line import/no-extraneous-dependencies
import path from 'path';

export default {
    // Resolve extensions and aliases
    resolve: {
        modules: [path.join(import.meta.url, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.css', '.ts', '.tsx'],
    },
    module: {
        // The "use" property array is run from right to left.
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        name: './font/[hash].[ext]',
                        mimetype: 'application/font-woff',
                    },
                }],
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                // Load and compile TS with TSC and transpile with babel
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
        ],
    },
    output: {
        path: path.resolve('dist'),
        publicPath: '/',

        // Output as ES6 module
        module: true,
        libraryTarget: 'module',
        environment: {
            // The environment supports ECMAScript Module syntax to import ECMAScript modules (import ... from '...').
            module: true,
        },
    },
    // Output as ES6 module
    experiments: {
        outputModule: true,
    },
};
