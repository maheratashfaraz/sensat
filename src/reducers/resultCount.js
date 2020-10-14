import * as Constants from '../constants.js'

const initialState = {
    value: 0
}

export default function resultCount(state = initialState, action = {}) {

    switch (action.type) {

        case Constants.UPDATE_RESULT_COUNT: {
            return {
                ...state,
                value: action.payload,
            }
        }
    }
    return state
}