import React, { Component } from 'react';
import ReactHlsPlayer from 'react-hls-player';
import { connect } from 'react-redux';

import Spinner from '../../component/Spinner/Spinner';
import Charity from '../charity/charity';
import './sponsorship.css'
import * as actions from'../../store/actions';

class Sponsorships extends Component {
    componentDidMount() {
        this.props.onFetchSponsorships();
    }
    render() {
        let sponsorships = this.props.sponsorshipsData.map(spdata => {
           
            const charityDonationIncentive =    spdata.hasOwnProperty('charityDonationIncentive') ?
                                                    <Charity data={spdata.charityDonationIncentive}/>
                                                : null
            return(
                <div key={spdata.sponsorshipId} className="sponsorshipContainter">
                    <div className="BrandDetails">
                            <div className="brandName">
                                <img style={{maxHeight : "100px", maxWidth: "100px"}} src={spdata.brandLogoUri} alt="new" /> 
                                <h2>{spdata.brandName}</h2> 
                            </div>
                            <div className="brandInfo">
                                <h4>{spdata.brandInfo}</h4>
                            </div>
                            <div className="brandBrief">
                                <h5>{spdata.brief}</h5>
                            </div>
                            <div className="brandVideo">
                            <ReactHlsPlayer url={spdata.videoUriHls}
                                autoplay={false}
                                controls={true}
                                width="75%" 
                                height="auto" 
                            />
                        </div>
                    </div>
                   {charityDonationIncentive}      
                </div>
            )

        })
        return (
            <>
                {
                    this.props.spinner ? <Spinner /> : 
                    <div className="sponsorships">{sponsorships}</div>
                }
            </>
        )
    }
}
const mapStateToProps = state =>{
     return{
        sponsorshipsData: state.sponsorship.sponsorshipsData,
        spinner : state.sponsorship.spinner
    }
}; 
const mapDispatchToProps = dispatch =>{
    return{
        onFetchSponsorships : () => dispatch(actions.getSponsorships())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Sponsorships);