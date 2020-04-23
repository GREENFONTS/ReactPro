import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    const navStyle = {
        color: 'white',
    }
    
    return (
        <div className=" container-fluid bg-info">
            <nav className="navbar navbar-expand-lg  navbar-light" id="nav">
                <a className="navbar-brand pull-right" href="/Home" id="name">GREENFONTS</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav  mr-auto " id="nav-list">
                        <Link style={navStyle} to="/">
                            <li className="nav-item active" id="nav-links">
                                HOME
</li>
                        </Link>
                        <Link style={navStyle} to="/Resume">
                            <li className="nav-item active" id="nav-links">
                                RESUME
</li>
                        </Link>
                        <Link style={navStyle} to="/Services">
                            <li className="nav-item active" id="nav-links">
                                SERVICES
</li>
                        </Link>
                        <Link style={navStyle} to="/Blog">
                            <li className="nav-item active" id="nav-links">
                                BLOG
</li>
                        </Link>
                        <Link style={navStyle} to="/Contact">
                            <li className="nav-item active" id="nav-links">
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