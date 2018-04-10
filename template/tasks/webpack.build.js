var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config = require('./config').default;
var publicPath = config.publicPath;
var outputPath = config.outputPath;

var buildConf = {
    //插件项
    plugins: [
        //生成独立样式文件
        new ExtractTextPlugin({
            filename: 'css/[name].[contenthash].css',
            // Setting the following option to `false` will not extract CSS from codesplit chunks.
            // Their CSS will instead be inserted dynamically with style-loader when the codesplit chunk has been loaded by webpack.
            // It's currently set to `true` because we are seeing that sourcemaps are included in the codesplit bundle as well when it's `false`, 
            // increasing file size: https://github.com/vuejs-templates/webpack/issues/1110
            allChunks: true
        }),
        // new ExtractTextPlugin("css/[name].bundle.css"),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ],
    //页面入口文件配置
    entry: './src/main.js',
    //入口文件输出配置
    output: {
        path: path.join(__dirname, outputPath),
        publicPath: publicPath,
        filename: 'js/build.js'
    },
    module: {
        //加载器配置
        rules: [{
            test: /\.vue$/,
            use: [{
                loader: 'vue-loader',
                options: {
                    loaders: {
                        scss: ExtractTextPlugin.extract({
                            use: [
                                'css-loader',
                                {
                                    loader: 'postcss-loader',
                                    options: {
                                        config: {
                                            path: 'tasks/postcss.config.js'
                                        }
                                    }
                                },
                                'sass-loader'
                            ],
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            }]
        }, {
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    fallback: 'file-loader',
                    name: '[name].[ext]?[hash:8]',
                    outputPath: 'image/'
                }
            }]
        }, {
            test: /\.(js)$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'stage-2'],
                    plugins: ['transform-runtime']
                }
            }]
        }]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.scss'],
        alias: config.alias
    },
    externals: config.global,
};

module.exports = buildConf;