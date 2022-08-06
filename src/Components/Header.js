import Button from 'react-bootstrap/Button';
import React from 'react'
import ReactDOM from 'react-dom'
import logo from "../Images/spotify-logo-png-7053.png"

function Header() {
    return (
    <div class="header">
        <div className="headerBtns">
        <a href="/login"><button type="button" class="login--header--button">Log In</button></a>
        <a href="/signup"><button type="button" class="signup--header-button">Sign Up</button></a>
        </div>
    </div>   
    )
}

export default Header