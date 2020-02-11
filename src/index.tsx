import dva from 'dva'
import { createBrowserHistory } from 'history'
import router from './router'

import global from './models/global'
import menu from './models/menu'

import '@/styles/common.scss'

const app = dva({
  history: createBrowserHistory(),
})

app.model(global)
app.model(menu)

app.router(router)

app.start('#root')
