import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import IndexApp from './containers'
import configureStore from './configureStore'

import '@/styles/common.scss'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <IndexApp />
    </Provider>,
    document.getElementById('root')
)
