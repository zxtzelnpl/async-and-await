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

        ]
    },
    plugins: [
        // html 模版插件
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: `${__dirname}/app/index.tmpl.html`
        }),
    ],
    devtool: '#source-map',
    devServer: {
        contentBase: './dist',
        host:'0.0.0.0',
        historyApiFallback: false,
        overlay: true,
        useLocalIp:true,
    },
}