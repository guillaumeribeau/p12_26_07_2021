
import React,{useState,useEffect} from 'react'
import axios from 'axios';


const FetchDating = () => {
const [data, setData]= useState([]);

useEffect(()=>{
    axios.get('data.js')
    .then(res=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
},[])


    return (
        <div>
            
        </div>
    );
};

export default FetchDating;