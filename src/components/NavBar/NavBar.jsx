import React from 'react';

import resume from "../../assets/dylanaldrich_resume.pdf";
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            {/* navbar-light bg-light */}
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href={resume} target="_blank" rel="noreferrer">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;