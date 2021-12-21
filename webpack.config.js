const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/client/js/index.jsx',
    output: {
        path: path.join(__dirname, '/dist/www'),
        filename: 'js/app.js',
    },
    devServer: {
        port: 3000,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(woff(2)?|ttf|eot)$/,
                type: 'asset/resource',
                generator: {
                    filename: './fonts/[name][ext]',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/client/index.html' }),
        new MiniCssExtractPlugin({ filename: 'css/app.css' }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './node_modules/bootstrap/dist/css/bootstrap.min.css',
                    to: './css/bootstrap.min.css',
                },
            ],
        }),
    ],
};
