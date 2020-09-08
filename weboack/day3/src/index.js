let axios = require('axios')

axios.get('/api/user').then(res=>{
    console.log(res);
    
})
class LOg{
    constructor(){
        console.log(123);
        
        
    }
}

let log =new LOg()