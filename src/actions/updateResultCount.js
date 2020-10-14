import * as Constants from '../constants'

export default function updateResultCount(value) {
    return {
        type: Constants.UPDATE_RESULT_COUNT,
        payload: value
    }
}