const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './lesson02/src/main.js',
    output: {
        path: resolve(__dirname, 'lesson02/build'),
        filename: 'main.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\\.(png|jpe?g|gif)$/i,
                use: [
                    'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                        name: '[path][name].[ext]'
                    }
                }]
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader',
                options: {
                    name: 'media/[name].[ext]'
                }
            },
            {
                test: /\\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'lesson02/index.html')})
    ],
    devServer: {
        port: 9000
    }
};