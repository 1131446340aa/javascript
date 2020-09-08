function ajax(params) {
    let { url, type, data, contentType, error, success } = params
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('microsoft.XMLHttp') 
    if ((/^get$/i).test(type)) {
        data = JSON.parse(data)
        let path = Object.keys(data).reduce((str, key) => {
            return str + `${key}=${data[key]}&`
        }, '?')
        xhr.open(type, url + path.slice(0, -1), true)
        xhr.send()
    }
    if ((/^post$/i).test(type)) {
        xhr.open(type, url, true)
        xhr.setRequestHeader('content-type', contentType)
        xhr.send(data)
    }
    xhr.addEventListener('readystatechange', () => {
        xhr.readyState === 4 && (xhr.status === 200 ? success(JSON.parse(xhr.responseText)) : error(JSON.parse(xhr.responseText)))
    })
}