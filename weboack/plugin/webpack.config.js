const path = require('path')
let donePlugin = require('./plugins/donePlugin')
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
    plugins: [
        new donePlugin()
    ]
}