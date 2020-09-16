/**
 * @file: webpack.common.js 基础打包配置
 * @since: 2020-09-16
 * @author: Hooper (admin@hooperui.com)
 * @copyright: HooperUI @ Apache Licence 2.0
 */

const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = require('./config');

module.exports = {
    mode: 'production',
    entry: {
        app: ['./src/index.js']
    },
    output: {
        path: path.resolve(process.cwd(), './dist'),
        publicPath: '/dist/',
        filename: 'element-ui.common.js',
        chunkFilename: '[id].js',
        libraryExport: 'default',
        library: 'ELEMENT',
        libraryTarget: 'commonjs2'
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: config.alias,
        modules: ['node_modules']
    },
    externals: config.externals,
    performance: {
        hints: false
    },
    stats: {
        children: false
    },
    optimization: {
        minimize: false
    },
    module: {
        rules: [{
                test: /\.(jsx?|babel|es6)$/,
                include: process.cwd(),
                exclude: config.jsexclude,
                loader: 'babel-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions: {
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader']
            },
            {
                test: /\.(svg|otf|ttf|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: path.posix.join('static', '[name].[hash:7].[ext]')
                }
            }
        ]
    },
    plugins: [
        new ProgressBarPlugin(),
        new VueLoaderPlugin()
    ]
};