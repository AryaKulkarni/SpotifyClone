import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Sidebar from "../Components/Sidebar"
import React from 'react'
import ReactDOM from 'react-dom'

function HomePage() {
    return (
        <div className="HomePage">
            <Sidebar/>
            <Header/>
            <Footer/>
        </div>
    )
}
export default HomePage