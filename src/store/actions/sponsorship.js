import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchSponsorship = (sponsorshipsData) => {
    return {
        type: actionTypes.FETCH_SPONSORSHIPS,
        sponsorshipsData: sponsorshipsData
    }
}

export const fetchSponsorshipFailed = (sponsorshipsData) => {
    return {
        type: actionTypes.FETCH_SPONSORSHIPS_FAILED,
        sponsorshipsData: []
    }
}

export const getSponsorships = () => {
    return dispatch => {
        axios.get('https://api-test.test.aws.the8app.com/campaigns/sampledata/sponsorships')
            .then(response => {
                dispatch(fetchSponsorship(response.data));
            }).catch(err => {
                dispatch(fetchSponsorshipFailed());
            })
    }
}