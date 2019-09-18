import { routerRedux } from 'dva/router'

export default {
    namespace: 'menu',
    state: {
        collapsed: true,
        currentMenu: '',
    },
    effects: {
        * changeMenu({ payload }, { put }) {
            yield put(routerRedux.push(payload))
        },
    },
    reducers: {
        changeLayoutCollapsed(state) {
            return {
                ...state,
                collapsed: !state.collapsed,
            }
        },
        saveCurrentMenu(state, { payload }) {
            return {
                ...state,
                currentMenu: payload,
            }
        },
    },

    subscriptions: {
        listenPathname({ dispatch, history }) {
            history.listen((path /*  action */) => {
                dispatch({
                    type: 'saveCurrentMenu',
                    payload: path.pathname,
                })
            })
        },
    },
}
