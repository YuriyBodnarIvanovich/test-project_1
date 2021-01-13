import React, {useEffect} from 'react';
import SearchStyle from './SearchPage.module.css';
import axios from "axios";
import {useSelector,useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
import AuthorStyle from "../AuthorPage/AuthorPage.module.css";

const SearchPage = () =>{
    const data = useSelector(state=>state.searchPage);
    const dispatch = useDispatch();
    async function getData(resData){
        const resDataArr =  resData.results.trackmatches.track;
        await dispatch({type:'DATA_OF_TRACK',data: resDataArr})
    }
    function run(){
        dispatch({type:'SEARCH_TRACK',word:''});
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${data.searchWord}&api_key=5fc923c4394c17aa8d89fa3a1f44ee55&format=json`).then(async (response) => {
            let resData = response.data;
            console.log("Get search!");
            console.log(resData);
            await getData(resData)
            console.log("Top Track from redux!");
            console.log(data.topTrack);
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    useEffect(() => {
        run();
    },[]);

    let searchData;
    if( data.dataOfTrack.length !== 0 ){
        searchData = data.dataOfTrack.map((element,index)=>{
            return(
                <div className={SearchStyle.resultItem}>
                    <p>{index + 1}</p>
                    <p>{element.name}</p>
                    <p>{element.artist}</p>
                </div>
            )
        });
    }

    console.log("word:" )
    return(
        <div className={SearchStyle.container}>
            <div className={SearchStyle.searchContainer}>
                <img src="https://img.icons8.com/android/96/ffffff/search.png" onClick={run}/>
                <textarea
                    value={data.searchWord}
                    onChange={(event)=>{dispatch({type:'SEARCH_TRACK',word:event.target.value})}}>
                </textarea>
            </div>
            <div className={SearchStyle.result}>
                {searchData}
            </div>
            <NavLink to={'/'} className={SearchStyle.backContainer}>
                <button className={SearchStyle.back}>back</button>
            </NavLink>

        </div>
    )
}

export default SearchPage;
