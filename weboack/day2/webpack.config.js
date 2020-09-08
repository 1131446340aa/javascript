const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')//打包html
const MiniCss = require('mini-css-extract-plugin')//将css以link形式提取出来
const Optimize = require('optimize-css-assets-webpack-plugin')//css 压缩
const uglifyWebpackPlugin = require('uglifyjs-webpack-plugin') //压缩js
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "bundle.[hash].js",
        path: path.resolve(__dirname, './dist'),
        // publicPath:'http://www.baidu.com/'
    },
    devServer: {
        before(app) {
            app.get('', (req, res) => {
                let data = {
                    a: 3
                }
                res.json(data)
            })
        },
        port: 3000,
        contentBase: "./dist",
        compress: true
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            // minify: {
            //     removeAttributeQuotes: true,
            //     collapseWhitespace: true
            // }
            minify: false
        }),
        new MiniCss({
            filename: 'css/main.css'
        })
    ],
    optimization: {
        minimizer: [new Optimize(), new uglifyWebpackPlugin()]
    },
    module: {
        rules: [
            // {
            //     test: /\.html$/,
            //     use:'html-withimg-loader'
            // },
            {
                test: /\.(c|le)ss$/, use: [MiniCss.loader, 'css-loader', 'less-loader']//cssloader, lessloader, style-loader是将css插入head中
            },
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",// 将js高级版本转化为es5
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                        plugins: [
                            '@babel/plugin-transform-runtime',  //高级的全局方法
                        ]
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.(png|jpg|gif)$/,
                // use:['file-loader']   //文件loader,可以loader图片
                use: [{
                    loader: 'url-loader',  // 图片loader
                    options: {
                        limit: 1,
                        outputPath: './img',
                    }
                }]
            }
            // {
            //     test: /\.js$/,
            //     use: [{
            //         loader: "eslint-loader",
            //         options: {
            //             enforce: 'pre'
            //         }
            //     }]

            // }
        ]
    },
    mode: "production"
}