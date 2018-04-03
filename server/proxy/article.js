'use strict'

const { Article } = require('../models')

module.exports = class ArticleProxy {
    static async findAll () {
        return await Article.find()
    }

    static async addNew (article) {
        return await (new Article(article)).save()
    }
}
