const express = require('express')
const app = express()
app.get('/list', (req, res) => {
    const { callBack = Function.prototype } = req.query
    let data = {
        a: 3
    }
 
})
app.use(express.static('./'))
app.listen(4002, () => {
    console.log(1);

})
