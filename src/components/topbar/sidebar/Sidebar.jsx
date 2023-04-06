import React from "react";
import "./sidebar.css"
import { useState } from "react";


export default function Sidebar({onIncreaseFontSize,onDecreaseFontSize}) {
 

  return (

    <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem active">
                        <div className="sidebarIcon">
                             <i class="fa-solid fa-house fa-xl"></i>
                             Home
                         </div>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon">
                            <i class="fa-solid fa-timeline fa-xl"></i>
                             Analytics
                        </div>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon" >
                            <i class="fa-solid fa-arrow-trend-up fa-xl"></i>   
                            Sales
                        </div>
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Apps & Pages</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon">
                            <i class="fa-regular fa-envelope fa-xl"></i>
                             Email
                         </div>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon">
                            <i class="fa-brands fa-rocketchat fa-xl"></i>
                             Chat
                        </div>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon" >
                            <i class="fa-regular fa-calendar fa-xl"></i>   
                            Calendar
                        </div>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon" >
                            <i class="fa-regular fa-calendar-days fa-xl"></i>  
                            Kanban
                        </div>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon" >
                            <i class="fa-regular fa-user fa-xl"></i> 
                            Users
                        </div>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon" >
                            <i class="fa-regular fa-circle-check fa-xl"></i>
                            Roles & Persmissions 
                        </div>
                    </li>
                </ul>
            </div>

            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Components</h3>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon">
                             <i class="fa-regular fa-credit-card fa-xl"></i>
                             Cards
                         </div>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon">
                             <i class="fa-solid fa-circle-exclamation fa-xl"></i>
                             Reports
                        </div>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIcon" >
                            <button className="buttonIncrease" onClick={onIncreaseFontSize}><i class="fa-solid fa-plus fa-xl"></i>
                            Increase fontsize </button>
                        </div>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <div className="sidebarIconContainer" >
                           <button className="buttonReduce" onClick={onDecreaseFontSize} > <i class="fa-solid fa-minus fa-xl"></i>  
                            Reduce fontsize </button>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    </div>
  )
}
