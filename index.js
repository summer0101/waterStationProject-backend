const Koa = require('koa');
const app = new Koa()
// const cors = require('koa2-cors')
let router = require('./server/router')
app.use(router.routes())


app.use(async (ctx) =>{
  ctx.body = 'hello world'
})

app.listen(3000)
console.log('[demo] start-quick is starting at port 3000')

