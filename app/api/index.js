import createAPI from './createAPI'

export const article = {
    getList: async params => createAPI('/article', 'get', { params })
}