import * as Constants from '../constants'

const initialState = {
    name: 'Ozone'
}

export default (state = initialState, action = {}) => {

    switch (action.type) {
        case Constants.SET_SENSOR_NAME: {
            return {
                ...state,
                name: action.payload
            }
        }
    }
    return state;
}