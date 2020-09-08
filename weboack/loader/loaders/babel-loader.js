let babel = require('@babel/core')
let loaderUtils = require('loader-utils')
function loader(source) {
    let options = loaderUtils.getOptions(this)
    let cb = this.async()
    babel.transform(source, {
        ...options,
        sourceMaps: true
    }, function (err, res) {
        cb(err, res.code, res.map)
    })
}
module.exports = loader