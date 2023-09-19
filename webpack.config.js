const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '/src/js/main.js'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title : 'Webpack App',
            template: path.resolve(__dirname, 'src', 'index.html'), 
            filename: 'index.html'
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // previously contentBase
        },
        watchFiles: './src/index.html',
        open: true,
        hot: true,
        port: 3000,
    },
    module: {
        rules: [
            {
                test:/\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
}