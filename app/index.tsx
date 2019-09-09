import dva from 'dva'
import { createBrowserHistory } from 'history'
import router from './router'

import global from './models/global'

import '@/styles/common.scss'

const app = dva({
    history: createBrowserHistory(),
})

app.model(global)
app.router(router)

app.start('#root')
