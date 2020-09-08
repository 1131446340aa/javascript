const express =require('express')
const app = express()
app.get('/list', (req, res) => {
    const { callBack = Function.prototype } = req.query
    let data = {
        a: b
    }
    res.send(data)
    // res.send(`${callBack}(${JSON.stringify(data)})`)
})
app.use(express.static('./'))
app.listen(4004, () => {
    console.log(1);
})
