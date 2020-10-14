import { combineReducers } from 'redux';
import averageScore from './reducers/averageScore'
import resultCount from './reducers/resultCount'

export default combineReducers({
    averageScore,
    resultCount
})
