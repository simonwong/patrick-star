import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

const win = window
const sagaMiddleware = createSagaMiddleware()
const middlewares = []

// 状态增强器
let storeEnhancers

if (process.env.NODE_ENV === 'production') {
    storeEnhancers = compose(
        applyMiddleware(...middlewares, sagaMiddleware)
    )
} else {
    storeEnhancers = compose(
        applyMiddleware(...middlewares, sagaMiddleware),
        // 可视化开发工具
        (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
    )
}

const configureStore = (initialState = {}) => {
    const store = createStore(rootReducer, initialState, storeEnhancers)

    sagaMiddleware.run(rootSaga)

    if (module.hot && process.env.NODE_ENV !== 'production') {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore
