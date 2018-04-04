var webpack = require('webpack');
var path = require('path');
var config = require('./config').default;
var host = '127.0.0.1';
var port = config.port;
var publicPath = 'http://' + host + ':' + port + '/';

var devConf = {
    //插件项
    plugins: [
        //代码热替换
        new webpack.HotModuleReplacementPlugin(),
        //允许错误不打断程序
        new webpack.NoEmitOnErrorsPlugin()
    ],
    devtool: 'source-map',
    //页面入口文件配置
    entry: './src/main.js',
    //入口文件输出配置
    output: {
        publicPath: '/dist/',
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
    //dev-serve
    devServer: {
        contentBase: "./src",
        publicPath: '/',
        noInfo: true, //  --no-info option
        hot: true,
        inline: true,
        host: host,
        port: port,
        historyApiFallback: true
    }
};

module.exports = devConf;