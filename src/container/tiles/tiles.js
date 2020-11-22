import React,{ Component } from 'react';
import { FcLike,FcShare  } from 'react-icons/fc';
import {FaInstagram} from 'react-icons/fa';

import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import './tiles.css';
class Tiles extends Component{
    constructor(){
        super()
        this.state = {
            tilesData : [],
            spinner: true
        }
    }
    componentDidMount(){
            axios.get('https://api-test.test.aws.the8app.com/campaigns/sampledata/tiles')
            .then(res => {
                this.setState({
                    tilesData :  res.data,
                    spinner:false
                })
            }).catch(err =>{
                this.setState({
                    spinner: false
                })
                alert(err.message)
            })
    }
    render(){
         let response = null;
        if(this.state.tilesData != null){
            response = this.state.tilesData.map(item => {
                if(item.categoryType === "community"){
                    let styleObj = {
                        width : item.mediaWidth,
                        height : item.mediaHeight,
                        paddingTop :"5px"
                    }
                    return (
                        <div key={item.id} className="tiles">
                            <div className="float-left"><FaInstagram className="instaIcon" /> <span className="float-right pl-8"><a Style="color: #828282;" href={item.url}>{item.name}</a></span></div>
                            <div>
                                <img className="" src={item.mediaImageUri} alt="new" style={styleObj}/> 
                            </div>
                            <div>
                                <span className="likeIconSpan"><FcLike className="likeIcon" />{item.likesCount}</span><span className="shareIconSpan"><FcShare   className="shareIcon"/>{item.sharesCount}</span>
                            </div>
                        </div>
                    )
                }
                return null
            }
        );
        }
    
        return (<>
            {
                this.state.spinner ? <Spinner/> :
                <div className="titlesContainer content" >{response}</div> 
            }
        </>)
    }
}

export default Tiles;