import { put, call } from 'redux-saga/effects'

import createAPI from '../api'
import { actionTypes } from '../reducers'

function* fetch (url, type, config) {
    yield put({ type: actionTypes.FETCH_START })

    try {
        return yield call(createAPI, url, type, config)
    } catch (err) {
        yield put({ type: actionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 })
    } finally {
        yield put({ type: actionTypes.FETCH_END })
    }
}

const article = {
    getList: config => fetch('/article', 'get', config)
}

export default {
    article,
}
