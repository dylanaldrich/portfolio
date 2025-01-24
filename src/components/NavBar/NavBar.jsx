import React, { Component } from 'react';
import {Link} from "react-scroll";

import './NavBar.css';

class NavBar extends Component {
    toggleNavButton(e) {
        e.classList.toggle("show");
    }

    render () {
        return (
            <nav className="navbar navbar-expand-lg fixed-top">
                <button className="navbar-toggler collapsed shadow" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav nav-items mx-auto" id="hamburger">
                        <li className="nav-item">
                            <Link
                                to="about"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => {
                                    document.getElementById("navbarSupportedContent").classList.toggle("show");
                                }}
                            >
                                <span>About</span>
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="projects"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => {
                                    document.getElementById("navbarSupportedContent").classList.toggle("show");
                                }}
                            >
                                <span>Projects</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="skills"
                                className="nav-link"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => {
                                    document.getElementById("navbarSupportedContent").classList.toggle("show");
                                }}
                            >
                                <span>Skills</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                href="https://docs.google.com/document/d/1W9RVOyekcG4YEWN-rWSBqAigB2nI9MC6PuXCKKAPNjw/export?format=pdf"
                                onClick={() => {
                                    document.getElementById("navbarSupportedContent").classList.toggle("show");
                                }}
                            >
                                <span>Resume</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
};

export default NavBar;
