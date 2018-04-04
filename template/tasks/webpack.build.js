var webpack = require('webpack');
var path = require('path');
var config = require('./config').default;
var publicPath = config.publicPath;
var outputPath = config.outputPath;

var buildConf = {
    //插件项
    plugins: [
        //生成独立样式文件
        new ExtractTextPlugin("css/[name].bundle.css")
    ],
    //页面入口文件配置
    entry: './src/main.js',
    //入口文件输出配置
    output: {
        path: path.join(__dirname, outputPath),
        publicPath: publicPath,
        filename: 'build.js'
    },
    module: {
        //加载器配置
        rules: [{
            test: /\.vue$/,
            use: [
                'vue-loader',
                'vue-style-loader',
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
            ]
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