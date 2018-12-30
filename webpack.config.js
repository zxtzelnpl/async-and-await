const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry:'./app/main.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                },
                exclude: /node_modules/,
            }
        ]
    },
    plugins: [
        // html 模版插件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${__dirname}/app/index.tmpl.html`
        }),
    ],
    devtool: '#eval-source-map',
    devServer: {
        contentBase: './dist',
        historyApiFallback: false,
        overlay: true,
    },
}