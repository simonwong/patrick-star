import * as React from 'react'
import { Router as IRouter } from 'dva'
import { Router, Switch, Route } from 'dva/router'

import BasicLayout from '@/layout/BasicLayout'
import HomePage from '@/pages/Home'

const AppRouter: IRouter = ({ history }) => (
    <Router history={history}>
        <BasicLayout>
            <Switch>
                <Route
                    path="/home"
                    component={HomePage}
                />
            </Switch>
        </BasicLayout>
    </Router>
)

export default AppRouter
