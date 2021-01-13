import React from 'react';
import ItemStyle from './itemStyle.module.css';
import {NavLink, Route} from "react-router-dom";

const ItemOfTopTrack = (props) =>{
    const setAuthor = () =>{
        props.dispatch({type:'MAIN_AUTHOR',name:props.author});
    }
    return(
        <div className={ItemStyle.container}>
           <p style={{marginLeft:"20px"}}>{props.index + 1}</p>
            <img src={props.srcOfImage}/>
            <p>{props.name}</p>
            <NavLink to={'/Author'}>
                <p onClick={()=>{setAuthor()}}>{props.author}</p>
            </NavLink>
            <a style={{marginTop:"20px"}} href={props.link} target="_blank">силка</a>
        </div>
    )
}

export default ItemOfTopTrack;
