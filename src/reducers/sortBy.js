import * as Constants from '../constants'

const initialState = {
    kind: 'type'
}

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case Constants.SET_SORT_BY: {
            return {
                ...state,
                kind: action.payload
            }
        }
    }
    return state;
}