import Header from './components/Header'
import Footer from './components/Footer'
import Button from './components/Button'
import About from './components/About'
import Dashboard from './components/dashboard/Dashboard'
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Header/>

        </div>
        <div className="container">
          <Dashboard/>
          
        </div>
        <div className="container">
          <Footer/>
          
        </div>
    </Router>
    </div>
  );
}

export default App;
