import React, { Component } from 'react';
import axios from 'axios';

import Spinner from '../Spinner/Spinner';
import Charity from '../charity/charity'
import './sponsorship.css'
import ReactHlsPlayer from 'react-hls-player';
class Sponsorships extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sponsorshipsData: [],
            spinner: true
        }
    }
    componentDidMount() {
        axios.get('https://api-test.test.aws.the8app.com/campaigns/sampledata/sponsorships')
            .then(res => {
                this.setState({
                    sponsorshipsData: res.data,
                    spinner: false
                })
            }).catch(err =>{
                this.setState({
                    spinner: false
                })
                alert(err.message)
            })
    }
    render() {
        let sponsorships = this.state.sponsorshipsData.map(spdata => {
            //    return <img className="" src={spdata.videoUriHls} alt="new" /> 
            // return ( <video width="400" controls>
            //         <source src={spdata.videoUriDash} type="video/mp4" />
            //         <source src={spdata.videoUriHls} type="video/ogg" />
            //     </video>)
            // return (<iframe title={spdata.campaignId} width="420" height="315"
            //         src="https://www.youtube.com/embed/tgbNymZ7vqY">
            // </iframe>)
            const charityDonationIncentive =    spdata.hasOwnProperty('charityDonationIncentive') ?
                                                    <Charity data={spdata.charityDonationIncentive}/>
                                                : null
            return(
                <div class="sponsorshipContainter">
                    <div className="BrandDetails">
                            <div className="brandName">
                                <img Style="max-height: 100px; max-width: 100px;" src={spdata.brandLogoUri} alt="new" /> 
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
                    this.state.spinner ? <Spinner /> : 
                    <div className="sponsorships">{sponsorships}</div>
                }
            </>
        )
    }
}

export default Sponsorships;