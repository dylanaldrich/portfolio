import React from 'react';
import {Link} from "react-scroll";

import resume from "../../assets/dylanaldrich_resume.pdf";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav nav-items mx-auto">
                    <li className="nav-item mx-2">
                        <Link 
                            to="about"
                            className="nav-link" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <span>About</span>
                            <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link 
                            to="projects"
                            className="nav-link" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <span>Projects</span>
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link
                            to="skills"
                            className="nav-link" 
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <span>Skills</span>
                        </Link>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href={resume} target="_blank" rel="noreferrer"><span>Resume</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;