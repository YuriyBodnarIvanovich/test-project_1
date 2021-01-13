import React, {useState,useEffect} from 'react';
import MainStyle from './MainPage.module.css';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import ItemOfTopTrack from "./ItemOfTopTrack/ItemOfTopTrack";
import {NavLink} from "react-router-dom";

const MainPage = () =>{

    const data = useSelector(state=>state.mainPage);
    const dispatch = useDispatch();
    const  [number,setNumber] = useState(1);


    async function getData(resData){
        const resDataArr =  resData.tracks.track;
        await dispatch({type:'GET_TOP_TRACK',array: resDataArr})
    }


    useEffect(() => {
        axios.get('http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=5fc923c4394c17aa8d89fa3a1f44ee55&format=json').then(async (response) => {
            let resData = response.data;
            await getData(resData)
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    },[]);


    const catalogOfTopTrack = data.topTrack.map((element,index)=>{
        if(number * 5 > index && index > number * 5 - 6){
            return <ItemOfTopTrack
                index={index}
                name={element.name}
                author={element.artist.name}
                srcAuthor={element.artist.url}
                srcOfImage={element.image[0]['#text']}
                link = {element.url}
                dispatch={dispatch}
            />
        }
    });

    const catalogOfNumber = [];
    for (let i=1; i<=catalogOfTopTrack.length/5; i++){
        catalogOfNumber.push(<p onClick={()=>{setNumber(i)}}>{i}</p>)
    }
    return(
        <div className={MainStyle.container}>
            <NavLink to={'/Search'}>
                <button className={MainStyle.search}>Search</button>
            </NavLink>
            <div className={MainStyle.containerOfTitle}>
                <p style={{marginLeft:"20px"}}>№</p>
                <p>Img</p>
                <p>Track</p>
                <p>Author</p>
                <p>Link</p>
            </div>
            {catalogOfTopTrack}
            <div className={MainStyle.listOfNumberContainer}>
                <div className={MainStyle.listOfNumber}>
                    {catalogOfNumber}
                </div>
            </div>
        </div>
    )
}

export default MainPage;
