import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

// Pages //
import Home from './pages/home/home'

class App extends Component {
    
    render() {
        return(
            <Home />
        )
    }

}

export default App