import { combineReducers } from 'redux'

const initialState = {
    isFetching: 0,
    msg: {
        type: 1,
        content: ''
    },
    // userInfo: {}
}

export const actionTypes = {
    FETCH_START: 'FETCH_START',
    FETCH_END: 'FETCH_END',

    SET_MESSAGE: 'SET_MESSAGE'
}

export const actions = {
    clear_msg: () => ({
        type: actionTypes.SET_MESSAGE,
        msgType: 1,
        msgContent: '',
    })
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_START:
            return {
                ...state,
                isFetching: state.isFetching + 1,
            }
        case actionTypes.FETCH_END:
            return {
                ...state,
                isFetching:  state.isFetching - 1,
            }
        case actionTypes.SET_MESSAGE:
            return {
                ...state,
                isFetching: false,
                msg: {
                    type: action.msgType,
                    content: action.msgContent,
                }
            }
        default: 
            return state
    }
}

export default combineReducers({
    global: reducer,
})
