import * as Constants from '../constants';

export default function setCurrentPage(page) {
    return {
        type: Constants.SET_CURRENT_PAGE,
        payload: page
    }
}
