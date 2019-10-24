const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');

const distPath = path.join(__dirname, './dist');
const port = process.env.PORT || 5000;
module.exports = {
  output: {
    publicPath: '/',
    path: distPath,
    filename: 'bundle.js',
  },
  module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            },
        },
        {
            test: /\.html$/,
            use: [
                {
                    loader: 'html-loader',
                },
            ],
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/i,
            use: [
                {
                    loader: 'file-loader',
                },
            ],
        },
        {
            test: /\.(sc|c)ss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
    ],
},
  plugins: [
    new HtmlWebPackPlugin({
        template: './src/index.html',
        filename: './index.html',
    }),
],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
    hot: true
}
}
