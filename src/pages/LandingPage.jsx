import React from 'react';

import cv_photo from '../assets/images/cv_photo.png';

// import '../App.css';

const LandingPage = () => {
    return (
        <div>
            {/* Header */}
            <header className="jumbotron d-flex align-items-end my-0">
                <div className="header-text mx-auto text-white mt-3">
                    <h1 className="display-4 font-weight-bold">Dylan Aldrich</h1>
                    <p className="lead font-weight-bold">Software Engineer</p>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="d-flex justify-content-around">
                <div className="container row text-white text-left">
                    <div id="about-content" className="d-flex align-items-center">
                        <img src={cv_photo} alt="dylan aldrich"/>
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
            <section id="projects">
                <h2 className="font-weight-bold my-4">PROJECTS</h2>
                <div className="project d-flex align-items-center text-white" id="foodbook-section">
                    <div className="container d-flex align-items-center">
                        <a href="https://foodbook-recipeapp.herokuapp.com/" target="_blank">
                            <img className="shadow project-img" src="https://i.ibb.co/R9yRF0D/foodbook-home.png" alt="foodbook image" />
                        </a>
                        <div className="text-left">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://foodbook-recipeapp.herokuapp.com/" className="project-link" target="_blank">foodbook</a>
                            </h2>
                            <p className="project-description">
                                <span id="foodbook-tag" className="font-weight-bold">foodbook</span> is a chef's best friend! My app allows you to search through Edamam's database of millions of recipes, and then save your favorite recipes into as many of your own personalized "foodbooks" as you want. Once the recipes are stored, you can easily look into your foodbooks and find the right recipe for the right occasion.
                            </p>
                            <p className="my-1">
                                <a href="https://github.com/dylanaldrich/foodbook_client" target="_blank" className="project-link">GitHub </a>
                                <a href="https://foodbook-recipeapp.herokuapp.com/" target="_blank" className="project-link">Deployed App</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i class="devicon-react-original"></i>
                                <i class="devicon-mongodb-plain"></i>
                                <i class="devicon-express-original"></i>
                                <i class="devicon-nodejs-plain"></i>
                                <i class="devicon-html5-plain-wordmark"></i>
                                <i class="devicon-css3-plain-wordmark"></i>
                                <i class="devicon-bootstrap-plain"></i>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


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