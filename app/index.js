import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import IndexApp from './containers'
import configureStore from './configureStore'

import './lib/variable.scss'

const store = configureStore()

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <IndexApp />
        </Provider>
    </AppContainer>,
    document.getElementById('root')
)

if (module.hot) {
    module.hot.accept()
}
