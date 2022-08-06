import React from 'react'
import ReactDOM from 'react-dom'
import logo from "../Images/spotify-logo-png-7053.png"
import { FaApple,FaFacebookSquare,FaGoogle } from "react-icons/fa";


export default function LoginPage() {
    return (
        <div className="loginpage">
            <div className="signup--page--logo">
            <img src={logo}/>
            <h1>Spotify</h1>
            </div>
            <div className="mainBody">
                <p>To continue, log in to Spotify.</p>
                <div classname="login--buttons">
                <button type="button" className="login-buttons facebook"><FaFacebookSquare style={{position:"relative",bottom:"2px",right:"10px"}} />     Continue with Facebook</button><br/>
                <button type="button" className="login-buttons apple"><FaApple style={{position:"relative",bottom:"2px",right:"10px"}}/>     Continue with Apple</button><br/>
                <button type="button" className="login-buttons google"><FaGoogle style={{position:"relative",bottom:"2px",right:"10px"}}/>     Continue with Google</button><br/>
                <button type="button" className="login-buttons phoneNumber">Continue with Phone Number</button><br/>
                </div>
                <hr/>
                <form className="login--form" action="/login" method="post">
                <div>
                    <label for="#emailUsername">Email address or username</label><br/>
                    <input type="text" placeholder="Email address or username" id="emailUsername" name="emailUsername"/>
                    </div>
 
                    <div>
                    <label for="#loginPassword">Password.</label><br/>
                    <input type="text" placeholder="Password" id="loginPassword" name="loginPassword"/>
                    </div>
                    <p>Forgot your password?</p>
                    <button type="submit">Log In</button>
                </form>
                <hr/>
                <h5>Don't have an account?</h5>
                <a href="/signup"><button type="button" className="login--footer-button">Sign up for Spotify</button></a>
            </div>
        </div>
    )
}