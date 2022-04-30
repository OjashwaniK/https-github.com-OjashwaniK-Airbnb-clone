import React from 'react'
import './Header.css'
import LanguageIcon from '@mui/icons-material/Language';

import DehazeIcon from '@mui/icons-material/Dehaze';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import Pic from './images/airbnb-logo.png'
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
          <Link to='/'>
          <img className='header_icon' src={Pic}/>
          </Link>
    
        </div>
       
        <div className='header_center'> 
           <input type='text' placeholder='Start Your Search'/>
           <SearchIcon className='searchicon'/>
        </div>
        
        <div className='header_right'> 
           <p>Become a host</p>
           <LanguageIcon/>
           <div className='user_info'>
           <DehazeIcon/>
           <Avatar src=''/>
           </div>
           
        </div>

    </div>
  )
}

export default Header