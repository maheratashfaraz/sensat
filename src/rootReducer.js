import { combineReducers } from 'redux';
import sensors from './reducers/sensors'
import sensorType from './reducers/sensorType'
import sensorName from './reducers/sensorName'
import currentPage from './reducers/currentPage'

export default combineReducers({
    sensors,
    sensorType,
    sensorName,
    currentPage
})
