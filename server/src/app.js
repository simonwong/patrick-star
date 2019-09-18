import * as Koa from 'koa'
import * as Router from 'koa-router'

// const bodyParser = require('koa-bodyparser')
// const logger = require('koa-logger')
// const cors = require('koa2-cors')

// const middleware = require('./middlewares')
// const routerConfig = require('./router-config')

const app = new Koa()
const router = new Router()

router.get('/*', async (ctx) => {
    ctx.body = 'Hello World!';
});
// 将POST请求的formData数据解析到ctx.requset.body中
// app
//     .use(cors())
//     .use(bodyParser())
//     .use(logger())
//     .use(middleware.util)
    // .use(routerConfig.api.routes())
    // .use(routerConfig.api.allowedMethods())


app.use(router.routes())

app.listen(3000, () => {
    console.log('starting server at port 3000')
})
