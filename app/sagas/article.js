import { take, put, call } from 'redux-saga/effects'

import { article } from '@/api'
import { actionTypes as ArticleActionTypes } from '../reducers/article'

export function* getArticleList () {
    while (true) {
        const req = yield take(ArticleActionTypes.GET_ARTICLE_LIST)
        // const res = yield call(article.getList, { type: req.type, tag: req.tag, pageNum: req.pageNum })
        const res = yield call(article.getList, { ...req.payload })
        console.log(res)
        if (res) {
            yield put({ type: ArticleActionTypes.RESPONSE_ARTICLE_LIST, data: res.data.data })
        }
    }
}

