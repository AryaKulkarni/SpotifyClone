import React from 'react'
import ReactDOM from 'react-dom'
import cardsData from "./cardsData.js"

export default function Card(props) {
    let description_displayed=""
    if (props.card.description>75) {
               for(let i=0;i<75;i++) {
                description_displayed+=props.card.description[i]
               }
               description_displayed+="..."
            }
            else {
                description_displayed=props.card.description
            }
    return (
        <div classname="playlist--card">
            <img src=""/>
            <h1>{props.card.playlistName}</h1>
            
            <p>{description_displayed}</p>
        </div>
    )
}