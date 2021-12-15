const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        "js/app": "./src/app/js/App.jsx"
    },
  // Where files should be sent once they are bundled
 output: {
   path: path.join(__dirname, '/dist/www'),
   filename: "[name].js"
 },
  // webpack 5 comes with devServer which loads in development mode
 devServer: {
   port: 3000,
   watchContentBase: true
 },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
 module: {
   rules: [
     {
       test: /\.(js|jsx)$/,
       exclude: /nodeModules/,
       use: {
         loader: 'babel-loader',
         options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
         },
       }
     },
     {
       test: /\.scss$/,
       use: [MiniCssExtractPlugin.loader, 'css-loader', "sass-loader"]
     }
   ]
 },
 plugins: [
     new HtmlWebpackPlugin({ template: './src/app/index.html' }),
     new MiniCssExtractPlugin({filename: "css/styles.css"})
    ]
}