import * as Constants from '../constants';

export default function setSortBy(kind) {
    return {
        type: Constants.SET_SORT_BY,
        payload: kind
    }
}
