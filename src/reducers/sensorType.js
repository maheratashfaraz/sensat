import * as Constants from '../constants'

const initialState = {
    type: 'O3'
}

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case Constants.SET_SENSOR_TYPE: {
            return {
                ...state,
                type: action.payload
            }
        }
    }
    return state;
}