function splitUrl(str) {
    let parmas = str.split('?')[1]
    let obj = {}
    parmas.split('&').forEach((item) => {
        let [key, value] = item.split('=')
        obj[key] = value
    })
    return obj
}
console.log(splitUrl('https://www.baidu.com/s?ie=UTF-8&wd=ts'));
