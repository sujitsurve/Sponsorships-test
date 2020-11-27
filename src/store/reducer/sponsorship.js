import * as actionTypes from '../actions/actionTypes';

const initialState = {
    sponsorshipsData: [],
    spinner: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_SPONSORSHIPS:
            return {
                ...action,
                spinner: false
            }
        case actionTypes.FETCH_SPONSORSHIPS_FAILED:
            return {
                ...action,
                spinner: true
            }
        default:
            return state
    }
}

export default reducer;