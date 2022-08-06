import {logo} from "../Images/spotify-logo-png-7053.png"
import React from 'react'
import ReactDOM from 'react-dom'

export default function Logo() {
    return (
    <div className="spotify--logo">
        <img src="{logo}"/>
        <h1>Spotify</h1>
    </div>
    )
} 
