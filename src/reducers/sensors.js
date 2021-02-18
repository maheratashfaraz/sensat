import * as Constants from '../constants'

const initialState = {
    sensors: []
}

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case Constants.SET_SENSORS: {
            return {
                ...state,
                sensors: action.payload
            }
        }
    }
    return state;
}