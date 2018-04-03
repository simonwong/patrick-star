const { ArticleProxy } = require('../proxy')

module.exports = class ArticleControllers {
    /**
     * 获取文章
     */
    static async list (ctx) {
        let articles = await ArticleProxy.findAll()
        ctx.body = ctx.util.resuccess({
            articleList: articles
        })
    }

    /**
     * 添加文章
     */
    static async add (ctx) {
        const { body } = ctx.request
        const result = await ArticleProxy.addNew(body)
        ctx.body = ctx.util.resuccess()
    }

    /**
     * 删除文章
     */
    static async delete (ctx) {
        ctx.body = ctx.util.resuccess()
    }
}