const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
console.info(path.resolve(__dirname, '../dist'))
module.exports = {
    entry: {
        base_util: './src/index.js'
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*.*'], {
            root: path.resolve(__dirname, '../')
        })
    ],
    output: {
        filename: 'AlphaUMa.js',
        path: path.resolve(__dirname, '../dist'),
        library: 'AlphaUMa',
        libraryTarget: 'umd'
    }
};