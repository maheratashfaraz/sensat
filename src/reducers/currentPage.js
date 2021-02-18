import * as Constants from '../constants'

const initialState = {
    page: 'List'
}

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case Constants.SET_CURRENT_PAGE: {
            return {
                ...state,
                page: action.payload
            }
        }
    }
    return state;
}