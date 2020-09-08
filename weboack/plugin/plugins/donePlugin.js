class donePlugin {
    apply(complier) {
        complier.hooks.done.tap('donePlugin', (states) => {
            console.log('完成');
        })
    }
}
module.exports = donePlugin