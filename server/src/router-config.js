'use strict'

const Router = require('koa-router')

const {
    article,
} = require('./controllers')

const apiRouter = new Router({ prefix: '/api' })

exports.api = apiRouter
    .get('/article', article.list)
    .post('/article/delete', article.delete)
    .post('/article/add', article.add)
