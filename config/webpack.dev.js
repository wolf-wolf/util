const path = require('path');
const uglify = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js'
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, '../dist')
    },
    devServer: {
        contentBase: path.resolve(__dirname, '../dist'),
        host: 'localhost',
        compress: true,
        port: 8888
    },
    loader: {
        test: /\.(js)$/,
        use: {
            loader: 'babel-loader',
            exclude: /node_modules/
        }
    },
    plugins: [
        new CleanWebpackPlugin([path.resolve(__dirname, '../dist')], {
            root: path.resolve(__dirname, '../'),
            verbose: true,
            dry: false
        }),
        new uglify()
    ],

};