const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    module: {
        rules: [
          {
            test: /\.js$/i,
            exclude: /node_modules/,
            include: path.resolve(__dirname, 'src/'),
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
          },
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader']
          },
          {
            test: /\.(jpg|jpeg|png|svg|gif)$/i,
            type: 'asset/resource',
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
          }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
              {
                from: path.posix.join(
                    path.resolve(__dirname, 'assets/visuals/player').replace(/\\/g, '/'),
                    '*'
                ),
                to: path.resolve(__dirname, 'build'),
              },
              {
                from: path.posix.join(
                  path.resolve(__dirname, 'assets/json/playerHitboxData').replace(/\\/g, '/'),
                  '*'
                ),
                to: path.resolve(__dirname, 'build'),
              },
            ]
        }),
    ],
    devServer: {
        static: [
          {
            directory: path.join(__dirname, 'build/assets/visuals/player')
          },
          {
            directory: path.join(__dirname, 'build/assets/json/playerHitboxData')
          },
        ],
        hot: true,
        port: 3000,
        compress: true,
        open: true
    },
}