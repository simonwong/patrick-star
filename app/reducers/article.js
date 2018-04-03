const initialState = {
    articleList: [],
    pageNum: 1,
    total: 0,
}

export const actionTypes = {
    GET_ARTICLE_LIST: 'GET_ARTICLE_LIST',
    RESPONSE_ARTICLE_LIST: 'RESPONSE_ARTICLE_LIST',
}

export const actions = {
    get_article_list: (pageNum, tag) => ({
        type: actionTypes.GET_ARTICLE_LIST,
        pageNum,
        tag,
    })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RESPONSE_ARTICLE_LIST:
            return {
                ...state,
                articleList: action.data.articleList,
                total: action.data.total,
                pageNum: action.data.pageNum
            }
        default:
            return state
    }
}
