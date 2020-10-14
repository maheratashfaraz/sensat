import * as Constants from '../constants'

export default function updateAverageScore(score) {
    return {
        type: Constants.UPDATE_AVERAGE_SCORE,
        payload: score
    }
}