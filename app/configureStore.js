import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducers'

const win = window
const middlewares = []

// 状态增强器
let storeEnhancers

if (process.env.NODE_ENV === 'production') {
    storeEnhancers = compose(
        applyMiddleware(...middlewares)
    )
} else {
    storeEnhancers = compose(
        applyMiddleware(...middlewares),
        // 可视化开发工具
        (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
    )
}

const configureStore = (initialState = {}) => {
    const store = createStore(rootReducer, initialState, storeEnhancers)

    if (module.hot && process.env.NODE_ENV !== 'production') {
        module.hot.accept('./reducers', () => {
            const nextRootReducer = require('./reducers/index')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore
