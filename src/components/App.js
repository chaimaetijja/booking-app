import React from 'react';
import HomePage from './HomePage/HomePage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  





const App =()=> {
    return (
        <div>
            <Router path="/HotelDetails">
                <HomePage/>
            </Router>   
        </div>
    );
}




export default App ;
