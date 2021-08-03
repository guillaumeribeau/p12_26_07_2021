import React from 'react';
import useFetch from "./FetchDating";
import {useParams} from 'react-router-dom'


const Hello = () => {
    const {id}= useParams()
    const [loading, name] = useFetch(`http://localhost:3000/user/${id}`);
    
    if(loading){
        return(
            <div>chargement...</div>
        )
    }
    
    
    return (
        <div className='hello'>
            <h1>Bonjour <strong>{name.data.userInfos.firstName}</strong> {
       }</h1>
            <span>Félicitation ! Vous avez explosé vos objectifs hier 👏</span>
            
        </div>
    );
};

export default Hello;