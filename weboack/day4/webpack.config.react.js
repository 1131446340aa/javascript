let path = require('path')
let webpack = require('webpack')
module.exports={
    entry:{
        react:['react','react-dom']
    },
    output:{
        filename:'_dll_[name].js',
        path:path.resolve(__dirname,'./dist'),
        library:'_dll_[name]'
    },
    plugins:[
        new webpack.DllPlugin({
            name:'_dll_[name]',
            path:path.resolve(__dirname,'dist','mainfest.json')
        })
    ],
    mode:'development'
}