import React from 'react';
import "./topbar.css";
import { createContext, useState } from "react";
export const ThemeContext = createContext("null")


export default function Topbar({onButtonClick}) {
  return (
    <div className='topbar'>
       <div className='topbarWrapper'>
        <div className='topLeft'>
            <span className='logo'> AngelaPage </span>
        </div>
        <div className='topRight'>

            <div className='topbarIconContainer'>
                <i class="fa-solid fa-globe fa-xl"></i>
            </div>

            <div className='topbarIconContainer'>
                <button className='buttonMoon' 
                onClick={onButtonClick}
                >
                    <i class="fa-regular fa-moon fa-xl"></i></button>

            </div>

            <div className='topbarIconContainer'>
                <i class="fa-solid fa-border-all fa-xl"></i>
            </div>

            <div className='topbarIconContainer'>
                <i class="fa-regular fa-bell fa-xl"></i>
                <span className="topIconBadge">2</span>
            </div>
            
            <img src="https://d-tm.ppstatic.pl/kadry/ee/b8/0a07bbcf073de737d74d82892734.1000.jpg" alt="" className="topAvatar" />



        </div>
       </div>
    </div>
  )
}
