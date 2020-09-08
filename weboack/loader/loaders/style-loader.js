
let loaderUtils = require('loader-utils')
function loader(source) {
   
    // console.log(source);
    
    // let str =
    //     `
    // let style=document.createElement('style');
    // style.innerHTML=${JSON.stringify(source)};
    // document.head.appendChild(style)
    // `
    // return str
}
// ???
loader.pitch = function (remainRequest) {
  
    console.log(loaderUtils.stringifyRequest(this, '!!' + remainRequest));
    
    let str =
        `
let style=document.createElement('style');
style.innerHTML=require(${loaderUtils.stringifyRequest(this, '!!' + remainRequest)});
document.head.appendChild(style)
`
    return str
}

module.exports = loader