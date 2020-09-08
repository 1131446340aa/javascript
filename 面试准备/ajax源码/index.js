function ajax(params) {
    let { url, type, contentType, data, success, error } = params
    let xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHttp')
    if (type === 'GET') {
        let path = "?"
        data = JSON.parse(data)
        Object.keys(data).forEach(key => {
            path += `${key}=${data[key]}&`
        })
        xhr.open(type, url + path.slice(0, -1), true)
        xhr.send()
    }
    if (type === 'POST') {
        xhr.open(type, url, true)
        xhr.setRequestHeader('content-type', contentType)
        xhr.send(data)
    }
    xhr.addEventListener('readystatechange', () => {
        console.log(xhr.status)
        xhr.readyState === 4 && (xhr.status === 200 ? success(JSON.parse(xhr.responseText)) : error(JSON.parse(xhr.responseText)))
    })
}
