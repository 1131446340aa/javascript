const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
let webpack = require('webpack')

//1)cleanwebpackplugin
//2)copywebpackplugin   // 拷贝
//3)bannerwebpack
const { CleanWebpackPlugin } = require('clean-webpack-plugin')  //清除旧的打包文件
module.exports = {
    entry: {
        home: './src/index.js',
        // othera: './src/index1.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].[hash].js'
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: "home.html",
            template: "./index.html",
            chunks: ['home']
        }),
        new webpack.DefinePlugin({ //定义环境变量
            DEV:JSON.stringify('dev')
        }),
        new CleanWebpackPlugin(),
        new webpack.BannerPlugin('make-huanglihao')  // 声明作者
        // new htmlWebpackPlugin({
        //     filename: "other.html",
        //     template: "./index.html",
        //     chunks: ['other']
        // })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }]
            }
        ]
    },
    // devServer: {
    //     // proxy:{
    //     //     '/api':'http://localhost:3000'
    //     // }
    //     before(app) {
    //         app.get('/api/user', (req, res) => {
    //             let data = {
    //                 a: 3
    //             }
    //             res.send(data)
    //         })
    //     }
    // },
    // watch:true,//事实更新
    resolve:{
        modules:[path.resolve('node_modules')],
        // alias:{}//别名
    },
    devtool: "cheap-module-eval-source-map",//eval-source-map  eval-source-map cheap-module-map cheap-module-eval-source-map
}