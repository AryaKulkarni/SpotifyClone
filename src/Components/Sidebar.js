
import React from 'react'
import ReactDOM from 'react-dom'
import logo_2 from "../Images/kindpng_2023215.png"
import {FaHome,FaSearch,FaPlus,FaGripLinesVertical,FaHeart,FaSpotify} from "react-icons/fa"


export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar--logo">
                {/* <img src={logo_2}/> */}
                <h1 className="spotify--logo"><FaSpotify style={{position:"relative",top:"4px",right:"10px"}}/>Spotify</h1>

            </div>
            <ul className="list1">
                <li><FaHome style={{position:"relative",bottom:"2px",right:"10px"}}/>Home</li>
                <li><FaSearch style={{position:"relative",bottom:"2px",right:"10px"}}/>Search</li>
                <li><FaGripLinesVertical style={{position:"relative",bottom:"2px",right:"10px"}}/>Your Library</li>
            </ul>
            <ul className="list2">
                <li><FaPlus style={{position:"relative",bottom:"2px",right:"10px"}}/>Create Playlist</li>
                <li><FaHeart style={{position:"relative",bottom:"2px",right:"10px"}}/>Liked Songs</li>
            </ul>
        </div>
    )
}