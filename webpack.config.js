const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

var config = {
    entry: './src/client/js/Index.jsx',
    output: {
        path: path.join(__dirname, '/dist/www'),
        filename: 'js/app.js',
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
            {
                test: /\.aac$/,
                type: 'asset/resource',
                generator: {
                    filename: './assets/[name][ext]',
                },
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/client/js/components'),
            '@hooks': path.resolve(__dirname, 'src/client/js/hooks'),
            '@other': path.resolve(__dirname, 'src/client/js/other'),
            '@stores': path.resolve(__dirname, 'src/client/js/stores')
          }
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/client/index.html' }),
        new MiniCssExtractPlugin({ filename: 'css/app.css' }),
        new FaviconsWebpackPlugin({
            logo: './src/client/assets/Calendar.ico',
            mode: 'light', // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
            devMode: 'light'})
    ],
};

module.exports = (env, argv) => {

    function getCopyPatterns() {
        const sourcePath = './node_modules/bootstrap/dist/css/';
        const destinationPath = './css/';
        const cssName = 'bootstrap.min.css';
        let patterns = [{from: sourcePath + cssName, to: destinationPath + cssName}];
        if (argv.mode === 'development') {
            const mapName = cssName + '.map';
            patterns.push({from: sourcePath + mapName, to: destinationPath + mapName});
        }
        return patterns;
    }

    config.plugins.push(new CopyWebpackPlugin({ patterns: getCopyPatterns() }));

    return config;
}
