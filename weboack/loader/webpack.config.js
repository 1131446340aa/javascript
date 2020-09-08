
const path = require('path')
// const loader1 = require('./loaders/loader1')
// const loader2 = require('./loaders/loader2')
// const loader3 = require('./loaders/loader3')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolveLoader: {
        modules: ['node_modules', path.resolve(__dirname, 'loaders')]
    },
    module: {
        rules: [{
            test: /\.js$/,
            // use: {
            //     loader: 'babel-loader',
            //     options: {
            //         presets: [
            //             '@babel/preset-env'
            //         ]
            //     }
            // }
            use: {
                loader: 'banner-loader',
                options: {
                    text: '豪'
                    // filename:path.resolve(__dirname,'banner.js')
                }
            }
        },
        {
            test: /\.jpg|png|jpeg$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 200 * 1024
                }
            }
        },
        {
            test: /\.css|less$/,
            use: ['style-loader','css-loader','less-loader']
        }
    ]
    },
    devtool: 'source-map'
}