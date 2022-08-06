import Logo from "../Components/Logo.js"
import logo from "../Images/spotify-logo-png-7053.png"
import React from 'react'
import ReactDOM from 'react-dom'
import { FaApple,FaFacebookSquare,FaGoogle } from "react-icons/fa";

console.log(logo)

export default function SignupPage() {
    return (
        <div className="signup--page">
            <div className="signup--page--logo">
            <img src={logo}/>
            <h1>Spotify</h1>
            </div>
            <h2>Sign up for free to start listening.</h2>
            <div className="signup--buttons">
            <div>
            <button type="button" class="facebook--signup facebook"><FaFacebookSquare style={{position:"relative",bottom:"2px",right:"10px"}} />     Sign up with Facebook</button>
            </div>
            <div>
            <button type="button" class="google--signup google" style={{border:"1px solid gray"}}><FaGoogle style={{position:"relative",bottom:"2px",right:"10px"}}/>     Sign up with Google</button>
            </div>
            </div>
            <hr/>
            <div className="signup--email">
                <h5>Sign up with your email address.</h5>
                <form action="/signup" method="post">
                    <div>
                    <label for="#email">What's your email?</label><br/>
                    <input type="text" placeholder="Enter your email" id="email" name="emailAddress"/>
                    </div>
 
                    <div>
                    <label for="#confirmEmail">Confirm your email.</label><br/>
                    <input type="text" placeholder="Confirm your email" id="confirmEmail" name="confirmEmailAddress"/>
                    </div>
                    
                    <div>
                    <label for="#password">Create a password</label><br/>
                    <input type="password" placeholder="Create a password" id="password" name="password"/>
                    </div>
                    <div>
                    <label for="#username">What should we call you?</label><br/>
                    <input type="text" placeholder="Enter a profile name" id="username" name="username"/>
                    </div>

                    <div>
                    <label for="#DOB">What's your date of birth?</label><br/>
                    <input type="date" id="DOB" />
                    </div>

                    
                
                    
                
                <p>By clicking on sign-up, you agree to Spotify's<span> Terms and Conditions of Use.</span> </p>
                <p>To learn more about how Spotify collects, uses, shares and protects your personal data, please see <span>Spotify's Privacy Policy.</span></p>
                <button type="submit" name="button">Sign Up</button>
                </form>
                <p>Have an account?<a href="/login"><span> Log In.</span></a></p>
            </div>
        </div>
    )

}