import React from 'react'
import ReactDOM from 'react-dom'
export default function Footer() {
    return (
        <div className="footer">
            <div className="footer--text">
                <h6>PREVIEW OF SPOTIFY</h6>
                <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
            </div>
            <div className="footer--signup">
                <a href="/signup"><button type="button" className="footer--signup--button">Sign up for free</button></a>
            </div>
        </div>
    )
}