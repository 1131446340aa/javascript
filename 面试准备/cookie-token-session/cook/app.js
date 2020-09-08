const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const session = require('koa-session');
const index = require('./routes/index')
const users = require('./routes/users')
const jwt = require('koa-jwt')
var cors = require('koa2-cors');
app.keys = ['some secret hurr'];
const CONFIG = {
   key: 'koa:sess',   //cookie key (default is koa:sess)
   maxAge: 86400000,  // cookie的过期时间 maxAge in ms (default is 1 days)
   overwrite: true,  //是否可以overwrite    (默认default true)
   httpOnly: true, //cookie是否只有服务器端可以访问 httpOnly or not (default true)
   signed: true,   //签名默认true
   rolling: false,  //在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
   renew: false,  //(boolean) renew session when session is nearly expired,
};
// error handler
onerror(app)

// middlewares
// app.use(async(ctx)=>{
//   if(ctx.url=== '/index'){
//       ctx.cookies.set(
//           'cid','hello world',{
//               domain:'localhost', // 写cookie所在的域名
//               path:'/',       // 写cookie所在的路径
//               maxAge: 2*60*60*1000,   // cookie有效时长
//               expires:new Date('2022-02-08'), // cookie失效时间
//               httpOnly:false,  // 是否只用于http请求中获取
//               overwrite:false  // 是否允许重写
//           }
//       );
//       ctx.body = 'cookie is ok';
//   }else{
//       if( ctx.cookies.get('cid')){
//           ctx.body = ctx.cookies.get('cid');
//       }else{
//           ctx.body = 'Cookie is none';
//       }
//   }
// });

app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(jwt({
    secret: "svfefgsefefwfsdfdsfsdfsdf"
}).unless({
    path: [/^\/login/]
}))
app.use(cors());
app.use(session(CONFIG, app));
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'ejs'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
