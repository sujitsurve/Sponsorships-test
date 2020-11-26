import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchTilesData = (tilesData) => {
    return {
        type: actionTypes.FETCH_TILES,
        tilesData: tilesData
    }
}
export const fetchTilesDataFailed = () => {
    return {
        type: actionTypes.FETCH_TILES_FAILED,
        tilesData: []
    }
}
export const getTilesData = () => {
    return dispatch => {
        axios.get('https://api-test.test.aws.the8app.com/campaigns/sampledata/tiles')
            .then(response => {
                dispatch(fetchTilesData(response.data));
            }).catch(err => {
                dispatch(fetchTilesDataFailed());
            })
    }
}