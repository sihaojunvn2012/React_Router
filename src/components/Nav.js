import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,NavLink } from "react-router-dom";

class Nav extends Component {
    render() {
        return (
            <div>
                {/* begin menu */}
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                            <NavLink to="/">React Router</NavLink>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            Menu
                           <i className="fa fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <NavLink to="/News">New</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/Detail-New">Detail New</NavLink>
                                </li> 
                                <li className="nav-item">
                                    <NavLink to="/Contact">Contact</NavLink>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                {/* end Menu */}

            </div>
        );
    }
}

export default Nav;