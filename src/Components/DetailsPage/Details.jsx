import React from 'react'
import './Details.css'
import { FiSearch } from "react-icons/fi";
import { IoMdNotifications } from "react-icons/io";

function Details() {
  return (
    
    <div className='details-main'>
        <div className='details-search'>
        <p> < FiSearch  className='search-icon'/>  <input type="text" placeholder=' Search for a city or airport...' />   </p>
        <button className='search-btn'>GO </button>
        </div>
        <div className="notification">
          <IoMdNotifications className='noti-icon' /> <span>3</span>
        </div>
      

    </div>
  )
}

export default Details