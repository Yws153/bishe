const webpack = require('webpack')
const path= require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

const NODE_ENV = process.env.NODE_ENV
const DEVICE_TYPE = process.env.NODE_DEVICE

if (DEVICE_TYPE !== 'mobile' && DEVICE_TYPE !== 'desktop') {
  throw new Error('you should set device type, such as NODE_DEVICE=mobile | desktop')
}

const SRC_DEVICE_PATH = path.resolve(__dirname, 'src/desktop')
const BUILD_DEVICE_PATH = path.resolve(__dirname, 'build/desktop')
const APP_PATH = path.resolve(SRC_DEVICE_PATH, 'app')

const config = {
    //页面入口文件配置
    // devServer:{
    //     inline: true,
    //     contentBase: './build/desktop'
    // },
	// devtool: 'inline-source-map',
    devServer: {
        stats: {
            colors: true
        },
        publicPath: `/build/${DEVICE_TYPE}` //模板、样式、脚本、图片等资源对应server上的路径
    },
    entry: {
        // index: ['app/components/Button/index.js'],
        index: [`${APP_PATH}/index.js`],
        vendor: [
            'react',
            'react-dom'
        ]
    },
    //入口文件输出配置
    output: {
        path: BUILD_DEVICE_PATH, //输出目录的配置，模板、样式、脚本、图片等资源的路径配置都相对于它
        publicPath: '../', //模板、样式、脚本、图片等资源对应的的路径
        filename: 'js/[name].js'
    },
    module: {
        //加载器配置
        rules: [
            { test: /\.css/,use: ExtractTextPlugin.extract({use: ['css-loader', 'less-loader', 'postcss-loader']})},
            { test: /\.less$/, use: ExtractTextPlugin.extract({use: ['css-loader', 'less-loader', 'postcss-loader']})},
            { test: /\.js$/, use: "babel-loader", exclude: /node_modules/},
            { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    },
    //其它解决方案配置
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.less'],
        alias: { app: APP_PATH }
    },
    //插件项
    plugins: [
        new ExtractTextPlugin({filename:'css/[name].css'}),
        new webpack.LoaderOptionsPlugin({
            test: /\.less/,
            options: {
                postcss: function() {
                    return [autoprefixer({ browsers: ['last 2 versions'] })]
                }
            }
        }),
        new webpack.LoaderOptionsPlugin({
            debug: true
        })
    ]
};

for (const name in config.entry) {
	if (name !== 'vendor') {
		config.plugins.push(new HtmlWebpackPlugin({ //根据模板插入css/js等生成最终HTML
			// favicon: './src/img/favicon.ico', //favicon路径，通过webpack引入同时可以生成hash值
			title: '首页',
			chunks: ['vendor', 'index'], //需要引入的chunk，不配置就会引入所有页面的资源
			filename: './app/index.html', //生成的html存放路径，相对于path
			template: path.resolve(SRC_DEVICE_PATH, 'template/template.html'), //html模板路径
			inject: 'body', //js插入的位置，true/'head'/'body'/false
			hash: true, //为静态资源生成hash值
			minify: { //压缩HTML文件
				removeComments: true, //移除HTML中的注释
				collapseWhitespace: true //删除空白符与换行符
			}
		}))
	}
}

if (NODE_ENV === 'development') {
    for (const name in config.entry) {
        if (name !== 'vendor') {
            config.entry[name].unshift('webpack/hot/only-dev-server')
            if (DEVICE_TYPE === 'mobile') {
                config.entry[name].unshift('webpack-dev-server/client?http://localhost:4400')
            } else if (DEVICE_TYPE === 'desktop') {
                config.entry[name].unshift('webpack-dev-server/client?http://localhost:3300')
            }
        }
    }
    config.plugins.unshift(new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify("development")
    }))
    config.plugins.unshift(new webpack.HotModuleReplacementPlugin())
}

if (NODE_ENV === 'production') {
    config.plugins.unshift(new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify("production")
    }))
    config.plugins.push(new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
        // except: ['exports', 'require', '*'] //排除关键字
    }))
	config.plugins.push(new webpack.optimize.CommonsChunkPlugin('xfnpkg', 'js/xfnpkg.js'))
    config.plugins.push(new webpack.optimize.OccurrenceOrderPlugin())
	delete config.devtool
	delete config.debug
}

module.exports = config
