import * as Constants from '../constants.js'

const initialState = {
    value: 0
}

export default function averageScore(state = initialState, action = {}) {

    switch (action.type) {

        case Constants.UPDATE_AVERAGE_SCORE: {
            return {
                ...state,
                value: action.payload,
            }
        }
    }
    return state
}