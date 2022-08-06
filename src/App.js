import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from "./Components/Header.js"
import HomePage from "./Pages/HomePage.js"
import LoginPage from "./Pages/LoginPage.js"
import SignupPage from "./Pages/SignupPage.js"
import React from 'react'
import ReactDOM from 'react-dom'
import Card from "./Components/HomePageComponents/Card.js"
import cardsData from "./Components/HomePageComponents/cardsData.js"

function App() {
  const cardData=cardsData.map(card=> {
    return (
      <Card card={card}/>
    )
  })
  return (
    <Router>
    <Routes>
      <Route exact path="/" exact element={<HomePage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="signup" element={<SignupPage/>} />
      <Route path="/card" element={cardData} />
    </Routes>
    </Router>
  );
}

export default App;
