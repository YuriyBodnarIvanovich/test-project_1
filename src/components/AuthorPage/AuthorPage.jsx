import React,{useEffect} from 'react';
import AuthorStyle from './AuthorPage.module.css';
import {useSelector,useDispatch} from "react-redux";
import axios from "axios";
import {NavLink} from "react-router-dom";


const AuthorPage = () =>{


    const data = useSelector(state=>state.authorPage);
    const dispatch = useDispatch();


    async function getData(resData){
        const resDataArr =  resData.artist;
        await dispatch({type:'AUTHOR_DATA',array:resDataArr});
    }

    useEffect(() => {
        axios.get(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${data.author}&api_key=5fc923c4394c17aa8d89fa3a1f44ee55&format=json`).then(async (response) => {
            let resData = response.data;
            console.log("Mac page");
            console.log(resData);
            await getData(resData)

        });
    }, []);


    if(data.dataAuthor.length === 0 ){
        return (
            <div className={AuthorStyle.loading}>
                <p>load...</p>
            </div>

        )
    }else {
        const arrayOfTags = data.dataAuthor.tags.tag.map((element,index)=>{
            return <div className={AuthorStyle.tag}>
                <p>{element.name}</p>
                <a style={{marginTop:"15px"}} href={element.url} target="_blank">link</a>
            </div>
        });


        return(
            <div className={AuthorStyle.container}>
                <img src={data.dataAuthor.image[2]['#text']}/>
                <h1>{data.author}</h1>
                <h2>Summary</h2>
                <p className={AuthorStyle.summary}>{data.dataAuthor.bio.summary}</p>
                <h3>Tags:</h3>
                <div className={AuthorStyle.tags}>
                    {arrayOfTags}
                </div>
                <div className={AuthorStyle.containerForBack}>
                    <NavLink to={'/'}>
                        <button className={AuthorStyle.back}>back</button>
                    </NavLink>
                </div>

            </div>
        )
    }

}

export default AuthorPage;
