import React from 'react';

import './charity.css'
const charity = (props) =>{
     return(
            <div key={props.data.charityId} className="charityDetails">
                    <h4>Charity Details : </h4> 
                    <img style={{maxHeight: "25%", maxWidth : "25%"}} src={props.data.charityLogoUri} alt="new" />
                    <h4 className="m-0">{props.data.charityName}</h4>
                    <h5 className="m-0">{`Amount : ${props.data.amount}`}</h5>
            </div>
    )
}

export default charity;