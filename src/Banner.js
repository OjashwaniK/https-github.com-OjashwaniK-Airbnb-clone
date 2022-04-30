import React,{useState} from 'react'
import './Banner.css'
import { Button } from '@mui/material';
import Search from './Search';
import {useNavigate} from 'react-router-dom';


function Banner() {
   const navigate= useNavigate();
   const[showSearch,setShowSearch]=useState(false);
  

  return (
    <div className='banner'>
        {showSearch && <Search/>}
        <div className='banner_search'>
            <Button onClick={()=>setShowSearch(!showSearch)} className='banner_searchButton'> Search Date</Button>

        </div>
       <div className='banner_info'>
           <h1>Get out and scratch your Imagination</h1>
           <h5>Plan a different kind of gateway to uncover hidden gems nesr you</h5>
           <Button onClick={()=> navigate("/Search")} >Explore Nearby</Button>
       </div>
   </div>
  )
}

export default Banner