import React,{ Component } from 'react';
import { FcLike, FcShare  } from 'react-icons/fc';
import { FaInstagram } from 'react-icons/fa';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Spinner from '../../component/Spinner/Spinner';
import './tiles.css';
class Tiles extends Component{
    componentDidMount(){
            this.props.onFetchTitle();
    }
    render(){
        let response = null;
        if(this.props.tilesData != null){
            response = this.props.tilesData.map(item => {
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
                this.props.spinner ? <Spinner/> :
                <div className="titlesContainer content" >{response}</div> 
            }
        </>)
    }
}
const mapStateToProps = state =>{
    return{
        tilesData: state.tiles.tilesData,
        spinner : state.tiles.spinner
    }
}; 
const mapDispatchToProps = dispatch =>{
    return{
        onFetchTitle : () => dispatch(actions.getTilesData())
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Tiles);
