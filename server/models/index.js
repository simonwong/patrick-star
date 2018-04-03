'use strict'

const mongoose = require('mongoose')

const mongoUrl = 'mongodb://localhost'

mongoose.connect(mongoUrl, {
    dbName: 'myBlog',
}, (err) => {
    if (err) {
        console.error('connect to %s error: ', mongoUrl, err.message)
        process.exit(1)
    }
})

module.exports = {
    Article: require('./article'),
}
