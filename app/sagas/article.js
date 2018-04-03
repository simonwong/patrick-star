import { take, put, call } from 'redux-saga/effects'

import API from './API'
import { actionTypes as ArticleActionTypes } from '../reducers/article'

export function* getArticleList () {
    while (true) {
        const req = yield take(ArticleActionTypes.GET_ARTICLE_LIST)
        const res = yield call(API.article.getList, {
            params: { tag: req.tag, pageNum: req.pageNum }
        })

        if (res) {
            yield put({ type: ArticleActionTypes.RESPONSE_ARTICLE_LIST, data: res.data.data })
        }
    }
}

