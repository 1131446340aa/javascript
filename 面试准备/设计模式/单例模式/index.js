
class Single{
    constructor(){
        this.a=3
    }
}


var danli = (function () {
    let _one = null
    if (!_one) {
        return  _one=new Single()
    }
    return _one
})()
let single1=danli
let single2=danli
console.log(single1===single2);
