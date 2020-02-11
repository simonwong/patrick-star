import * as React from 'react'
import { Router as IRouter } from 'dva'
import {
  Router, Switch, Route, Redirect,
} from 'dva/router'

import BasicLayout from '@/layout/BasicLayout'
import TechnicalArticle from '@/pages/TechnicalArticle'
import RecordLife from '@/pages/RecordLife'
import AboutMe from '@/pages/AboutMe'

export interface IRouterConfig {
    path: string
    redirect?: string
    // TODO: 这个类型的定义
    component?: any
    routes?: IRouterConfig[]
    icon?: string
    name?: string

    hideInMenu?: boolean
}

export const routerConfig: IRouterConfig[] = [
  {
    path: '/',
    component: BasicLayout,
    routes: [
      { path: '/', redirect: '/article' },
      {
        path: '/article',
        name: '技术文章',
        icon: 'article',
        component: TechnicalArticle,
      },
      {
        path: '/life',
        name: '记录生活',
        icon: 'life',
        component: RecordLife,
      },
      {
        path: '/about',
        name: '关于我',
        icon: 'about',
        component: AboutMe,
      },
    ],
  },
]

function generateRouter<T extends IRouterConfig>(routerArray: T[]): any {
  function mapFunction(router: T): any {
    if (router.routes && router.routes.length) {
      return (
        <Route
          key={router.path}
          path={router.path}
          component={() => (
            <router.component routerData={router.routes}>
              <Switch>
                {generateRouter(router.routes || [])}
              </Switch>
            </router.component>
          )}
        />
      )
    }
    if (router.redirect) {
      return (
        <Redirect
          exact
          key={router.path}
          from={router.path}
          to={router.redirect}
        />
      )
    }
    return (
      <Route
        exact
        key={router.path}
        path={router.path}
        component={router.component}
      />
    )
  }
  return (
    <Switch>
      {routerArray.map(mapFunction)}
    </Switch>
  )
}

const AppRouter: IRouter = ({ history }) => (
  <Router history={history}>
    { generateRouter(routerConfig) }
    {/* <BasicLayout>
            <Switch>
                <Route path="/article" component={TechnicalArticle} />
                <Route path="/life" component={RecordLife} />
                <Route path="/about" component={AboutMe} />
            </Switch>
        </BasicLayout> */}
  </Router>
)

export default AppRouter
