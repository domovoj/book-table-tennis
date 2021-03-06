var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var path = require('path');

module.exports = webpackMerge(commonConfig, {
    // devtool: '#source-map',

    entry: {
        dev: 'webpack/hot/only-dev-server'
    },

    output: {
        path: path.join(process.cwd(), '/dist'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        pathinfo: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css')
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        inline: true,
        hot: true
    }
});
