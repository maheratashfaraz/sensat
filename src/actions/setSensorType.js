import * as Constants from '../constants';

export default function setSensorType(type) {
    return {
        type: Constants.SET_SENSOR_TYPE,
        payload: type
    }
}
