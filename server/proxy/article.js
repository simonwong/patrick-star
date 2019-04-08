'use strict'

const { Article } = require('../models')

module.exports = class ArticleProxy {
    static async findAll () {
        return await Article.find()
    }

    static async find (params) {
        return await Article.find(params)
    }

    static async addNew (article) {
        const data = Object.assign({
            viewCount: 0,
            commentCount: 0,
            isPublish: false,
        }, article)
        return await (new Article(data)).save()
    }
}
