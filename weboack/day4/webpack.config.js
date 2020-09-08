const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
let HtmlWebpackPlugin = require('html-webpack-plugin')
let happypack = require('happypack')  //多线程打包
// tree-shanks 生产环境下会去掉没用的代码  import
let webpack = require('webpack')
module.exports = {
    entry: {
        index: './src/index.js',
        other: './src/other.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './dist')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                common: {
                    minSize: 0,
                    minChunks: 2,
                    chunks: 'initial'
                }
            },
        
        }
    },
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        }),
        // new CleanWebpackPlugin(),
        new webpack.IgnorePlugin(/\.\/locale/, /moment/),
        // new webpack.DllReferencePlugin({
        //     manifest: path.resolve(__dirname, './dist/mainfest.json')
        // }),
        new happypack({
            id: 'js',
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env',
                            '@babel/preset-react'
                        ]
                    }
                }
            ]
        })
    ],
    module: {
        noParse: /jquery/,//不去解析jquery
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, './src'),
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         presets: ['@babel/preset-env',
                //             '@babel/preset-react'
                //         ]
                //     }
                // }
                use: 'happypack/loader?id=js'
            }
        ]
    },
    devServer: {
        port: 3000,
        open: true,
        contentBase: './dist'
    }
}