import * as Constants from '../constants';

export default function setSensorName(name) {
    return {
        type: Constants.SET_SENSOR_NAME,
        payload: name
    }
}
