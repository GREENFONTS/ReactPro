import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Nav = () => {
    
    return(
            <div className=" container-fluid bg-info">
                    <nav className="navbar navbar-expand-lg  navbar-light" id="nav">
                        <a className="navbar-brand pull-right" href="#" id="name">GREENFONTS</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mr-auto " id="nav-list">
                            <Link to="/">
                                <li className="nav-item active">
                                    HOME
                                </li>
                            </Link>
                            <Link to="/Resume">
                                <li className="nav-item active">
                                    Resume
                                </li>
                            </Link> 
                            <Link to="/Service">
                                <li className="nav-item active">
                                    SERVICES
                                </li>
                            </Link>
                            <Link to="/Blog">
                                <li className="nav-item active">
                                   BLOG
                                </li>
                            </Link>
                            <Link to="/Contact">
                                <li className="nav-item active">
                                    CONTACT
                                </li>
                            </Link>
                               
                            </ul>
                        </div>
                    </nav>
                </div>

               
           
        )
    
    }

export default Nav;