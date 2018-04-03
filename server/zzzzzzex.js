const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

// const { route } = require('./until')

const app = new Koa()
// const router = new Router()
// const home = new Router()
// const page = new Router()

// home
//     .get('/simon', async ctx => {
//         ctx.body = 'home ==> simon'
//     })
//     .get('/todo', async ctx => {
//         ctx.body = 'home ==> todo'
//     })

// page
//     .get('/simon', async ctx => {
//         ctx.body = 'page ==> simon'
//     })
//     .get('/todo', async ctx => {
//         ctx.body = 'page ==> todo'
//     })

// router.get('/', async ctx => {
//     ctx.body = ctx.query
// })

// router.use('/home', home.routes(), home.allowedMethods())
// router.use('/page', page.routes(), page.allowedMethods())

// 用于将POST请求的formData数据解析到ctx.requset.body中
// app.use(bodyParser())

// app
//     .use(router.routes())
//     .use(router.allowedMethods())


app.use(async ctx => {
    if (ctx.url === '/index') {
        ctx.cookies.set(
            'MyName', 'Simon', {
                domain: '127.0.0.1', // 写cookie所在的域名
                path: '/index', // 写cookie所在的路径
                maxAge: 1000 * 60 * 60 * 24, // cookie有效时长
                expires: new Date('2018-12-31'), // cookie失效时间
                httpOnly: false, // 是否只用于http请求中的获取
                overwrite: false // 是否允许重写
            }
        )
        ctx.body = 'cookie is ok'
    } else {
        if (ctx.cookies.get('MyName')) {
            ctx.body = `the MyName cookies value is ${ctx.cookies.get('MyName')}`
        } else {
            ctx.body = 'none cookies'
        }
    }
})

app.listen(3000, () => {
    console.log('starting at port 300')
})
