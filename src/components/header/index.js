import React, { Component } from "react";

// CSS //
import './style.css'

// Images //
import logo from '../../img/logo.png'

class Header extends Component {

    render() {
        return (
            <div className="content homePage">
                <div data-aos="fade-right" className="content logo">
                    <img alt="website-logo" loading="lazy" src={ logo } />
                    <p>FullStack Developer</p>
                </div>
            </div>
        )
    }

}

export default Header