const mongoose = require('mongoose')
const momment = require('moment')

/**
 * article 表结构
 */
const articleSchema = new mongoose.Schema({
    title: String, // 标题
    author: String, // 作者
    body: String, // 内容
    tags: String, // 所属标签
    date: { // 日期
        type: Date,
        default: Date.now,
        get: v => momment(v).format('YYYY-MM-DD HH:mm')
    },
    viewCount: Number, // 浏览量
    commentCount: Number, // 评论量
    isPublish: Boolean, // 是否发布
})
articleSchema.set('toJSON', { getters: true })

/**
 * 模型
 */
module.exports = mongoose.model('Article', articleSchema)