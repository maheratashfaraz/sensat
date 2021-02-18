import * as Constants from '../constants';

export default function setSensors(sensors) {
    return {
        type: Constants.SET_SENSORS,
        payload: sensors
    }
}
