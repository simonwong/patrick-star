const fs = require('fs')

/**
 * 解析post请求的参数
 * @param {*} queryStr 
 */
const parseQueryStr = queryStr => {
    let queryData = {}
    let queryStrList = queryStr.split('&')

    queryStrList.forEach(item => {
        let itemList = item.split('=')
        console.log(itemList)

        queryData[itemList[0]] = decodeURIComponent(itemList[1])
    });

    return queryData
}

// 返回post请求的参数
const parsePostData = ctx => {
    return new Promise((resolve, reject) => {
        try {
            let postData = ''

            ctx.req.on('data', data => {
                postData += data
            })
            ctx.req.addListener('end', () => {
                let parseData = parseQueryStr(postData)
                resolve(parseData)
            })
        } catch(error) {
            reject(error)
        }
    })
}


/**
 * 返回对应页面
 */
const render = page => (
    new Promise((resolve, reject) => {
        let pageUrl = `./server/${page}`

        fs.readFile(pageUrl, 'binary', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
)
/**
 * 输出页面
 */
async function route (url) {
    let page = '404.html'

    switch(url) {
        case '/':
            page = 'index.html'
            break
        case '/index':
            page = 'index.html'
            break
        case '/todo':
            page = 'todo.html'
            break
        default:
            break
    }

    const html = await render(page)

    return html
}

module.exports = {
    parsePostData,
    route
}
