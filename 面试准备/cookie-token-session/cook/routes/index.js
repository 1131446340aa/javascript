const router = require('koa-router')()
const jwt = require('jsonwebtoken')
const util = require('util')
let axios = require('axios')
const verify = util.promisify(jwt.verify)
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.post('/json', async (ctx, next) => {

  let token = ctx.headers.authorization.split(' ')[1]
  console.log(token)

  try {
    let pla = await verify(token, "svfefgsefefwfsdfdsfsdfsdf")
    console.log(pla);
    
  }
  catch (e) {

  }

  ctx.cookies.set(
    'username', 'zyb', {
    domain: 'localhost', // 写cookie所在的域名
    path: '/json',       // 写cookie所在的路径
    maxAge: 1000 * 60 * 60 * 24,   // cookie有效时长
    expires: new Date('2019-2-12'), // cookie失效时间
    httpOnly: true,  // 是否只用于http请求中获取
    overwrite: false  // 是否允许重写
  }
  )

  ctx.session.username = "zhangshang"
  ctx.body = {
    title: 'koa2 json',
    info: ctx.session
  }
})
router.get('/cookie',async ctx=>{
  
})
router.post('/login', async (ctx, next) => {
  let token = jwt.sign({
    username: "xiaohuang"
  }, "svfefgsefefwfsdfdsfsdfsdf", { expiresIn: '1h' })
  ctx.body = {
    a: token
  }
})
module.exports = router
