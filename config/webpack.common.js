const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new CleanWebpackPlugin(['dist/*.*'], {
            root: path.resolve(__dirname, '../')
        })
    ],
    output: {
        filename: 'AlphaUMa.js',
        path: path.resolve(__dirname, '../dist'),
        library: {
            root: 'AlphaUMa',
            amd: 'alpha-uma',
            commonjs: 'alpha-uma'
        },
        libraryTarget: 'umd',
        globalObject: 'this'
    }
};