const webpack = require('webpack')
const path= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const SRC_DEVICE_PATH = path.resolve(__dirname, 'src/desktop')
const BUILD_DEVICE_PATH = path.resolve(__dirname, 'build/desktop')

const config = {
    //插件项
    plugins: [
        new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
			// favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
			title: '首页',
			chunks: ['lib', 'index'], //需要引入的chunk，不配置就会引入所有页面的资源
			filename: './app/index.html', //生成的html存放路径，相对于path
			template: path.resolve(SRC_DEVICE_PATH, 'template/template.html'), //html模板路径
			inject: 'body', //js插入的位置，true/'head'/'body'/false
			hash: true, //为静态资源生成hash值
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: true //删除空白符与换行符
			}
		})
    ],
    //页面入口文件配置
    entry: {
        index: ['./src/desktop/app/components/Button/index.js'],
        // lib: [
        //     'react',
        //     'react-dom'
        // ],
    },
    //入口文件输出配置
    output: {
        path: BUILD_DEVICE_PATH, //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: '../', //模板、样式、脚本、图片等资源对应的的路径
        filename: 'js/[name].js'
    },
    module: {
        //加载器配置
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader", exclude: /node_modules/},
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader", exclude: /node_modules/},
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/},
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    //其它解决方案配置
    postcss: [autoprefixer({ browsers: ['> 1%', 'last 2 versions'] })],
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
        alias: {}
    }
};


module.exports = config
