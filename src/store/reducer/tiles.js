import * as actionTypes from '../actions/actionTypes';

const initialState = {
    tilesData : [],
    spinner : true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_TILES:
            return {
                ...action,
                spinner: false
            }
            case actionTypes.FETCH_TILES_FAILED:
            return {
                ...action,
                spinner: true
            }
        default:
            return state
    }
}

export default reducer;