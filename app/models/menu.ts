import { routerRedux } from 'dva/router'

export default {
    namespace: 'menu',
    state: {
        collapsed: true,
        currentMenu: window.location.pathname,
    },
    effects: {
        * changeMenu({ payload }, { put }) {
            yield put(routerRedux.push(payload))
            yield put({
                type: 'saveCurrentMenu',
                payload,
            })
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
}
