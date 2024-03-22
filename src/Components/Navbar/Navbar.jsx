import React from 'react'
import './Navbar.css'
import { MdDashboardCustomize } from "react-icons/md";
import { MdOutlineFavorite } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { IoSettingsSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
function Navbar() {
  return (
    <div className='nav-main'>
        <div className="nav-profile">
            <h1>Weather</h1>
            <h1>App</h1>
           
        </div>
        <div className="nav-details">
            <p><MdDashboardCustomize /> <span> Dashboard</span></p>
            <p><MdOutlineFavorite /> <span> Saved Location</span></p>
            <p><SlCalender/> <span> Calender</span> </p>
            <p><IoSettingsSharp/><span> Settings</span></p>
        </div>
        <div className="nav-logout">
           <p><IoIosLogOut /> <span>Log Out</span></p> 
        </div>
         
    </div>
  )
}

export default Navbar