import React from 'react'
import ReactDOM from 'react-dom'

import IndexApp from './containers'

if (module.hot) {
    module.hot.accept(() => {
        ReactDOM.render(
            <IndexApp />,
            document.getElementById('root')
        )
    })
}

ReactDOM.render(
    <IndexApp />,
    document.getElementById('root')
)
