import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white',
        borderBottom: "none"
        
    }
    
    return (
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg  bg-info navbar-light p-2 m-0 p-lg-1" id="nav">
                    <a className="navbar-brand mr-lg-5 pr-5" href="#" id="name">GREENFONTS</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                <div className="collapse navbar-collapse d-flex ml-lg-5 pull-right-lg" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-lg-5 mr-lg-1" id="nav-list">
                        <Link style={navStyle} to="/">
                            <li className="nav-item active mr-lg-5" id="nav-links">
                                HOME
                            </li>
                        </Link>
                        <Link style={navStyle} to="/Resume">
                            <li className="nav-item active mr-lg-5" id="nav-links">
                                RESUME
                                </li>
                        </Link>
                        <Link style={navStyle} to="/Services">
                            <li className="nav-item active mr-lg-5" id="nav-links">
                                SERVICES
                                </li>
                        </Link>
                        <Link style={navStyle} to="/Blog">
                            <li className="nav-item active mr-lg-5" id="nav-links">
                                BLOG
                                </li>
                        </Link>
                        <Link style={navStyle} to="/Contact">
                            <li className="nav-item active mr-lg-5" id="nav-links">
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