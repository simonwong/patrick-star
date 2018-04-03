const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa2-cors')

const middleware = require('./middlewares')
const routerConfig = require('./router-config')

const app = new Koa()

// 将POST请求的formData数据解析到ctx.requset.body中
app
    .use(cors())
    .use(bodyParser())
    .use(logger())
    .use(middleware.util)
    .use(routerConfig.api.routes())
    .use(routerConfig.api.allowedMethods())

app.listen(3000, () => {
    console.log('starting server at port 3000')
})
