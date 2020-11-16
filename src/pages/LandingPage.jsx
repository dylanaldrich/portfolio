import React from 'react';

import cv_photo from '../assets/images/cv_photo.png';

// import '../App.css';

const LandingPage = () => {
    return (
        <div>
            {/* Header */}
            <header className="jumbotron d-flex align-items-end mb-0">
                <div className="header-text mx-auto text-white mt-3">
                    <h1 className="display-4 font-weight-bold">Dylan Aldrich</h1>
                    <p className="lead font-weight-bold">Software Engineer</p>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="d-flex justify-content-around">
                <div className="container row text-white text-left">
                    <div className="d-flex align-items-center">
                        <img src={cv_photo} alt="dylan aldrich" className="mr-4"/>
                        <div>
                            <h2 className="text-uppercase font-weight-bold">About</h2>
                            <p className="lead">
                                I’m a worldly, multilingual software developer with a background in web development, the music industry and education. As a creative problem solver, I am passionate about using technology to bring people closer together, and closer to achieving their dreams. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}


            {/* Footer */}
            <footer className="footer mt-auto">
                <div className="text-left ml-2">
                    <span className="text-muted">&copy; {(new Date().getFullYear())} Dylan Aldrich</span>
                </div>
            </footer>
        </div>
    )
};

export default LandingPage;