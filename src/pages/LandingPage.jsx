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
                            <h2 className="text-uppercase font-weight-bold">About Me</h2>
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

                {/* foodbook Section */}
                <div className="project-container d-flex align-items-center text-white" id="foodbook-section">
                    <div className="project container d-flex align-items-center">
                        <a href="https://foodbook-recipeapp.herokuapp.com/" target="_blank">
                            <img className="shadow project-img" src="https://i.ibb.co/R9yRF0D/foodbook-home.png" alt="foodbook image" />
                        </a>
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://foodbook-recipeapp.herokuapp.com/" className="project-link" target="_blank">foodbook</a>
                            </h2>
                            <p className="project-description mb-3">
                                A chef's best friend! This app is linked to an external API which allows you to search through a database of millions of recipes from all over the web. You can then save your favorite recipes into as many of your own personalized "foodbooks" as you like. Once the recipes are stored, you can open your foodbooks and easily find the right recipe, for the right occasion.
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://foodbook-recipeapp.herokuapp.com/" target="_blank" className="btn btn-light">View</a>
                                <a href="https://github.com/dylanaldrich/foodbook_client" target="_blank" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i class="devicon-react-original"></i>
                                <i class="devicon-mongodb-plain"></i>
                                <i class="devicon-express-original"></i>
                                <i class="devicon-nodejs-plain"></i>
                                <i class="devicon-javascript-plain"></i>
                                <i class="devicon-html5-plain-wordmark"></i>
                                <i class="devicon-css3-plain-wordmark"></i>
                                <i class="devicon-bootstrap-plain"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wayfarer Section */}
                <div className="project-container d-flex align-items-center text-white" id="wayfarer-section">
                    <div className="project container d-flex align-items-center">
                        <a href="https://wayfarer-bld.herokuapp.com/" target="_blank">
                            <img className="shadow project-img" src="https://i.ibb.co/YhYyhkP/wayfarer-home.png" alt="wayfarer image" />
                        </a>
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://wayfarer-bld.herokuapp.com/" className="project-link" target="_blank">Wayfarer</a>
                            </h2>
                            <p className="project-description mb-3">
                                Put on your traveling shoes and check out this colorful travel blog, where you can share travel tips and stories about your favorite places around the globe! You can also interact with other users, read and comment on their posts.
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://wayfarer-bld.herokuapp.com/" target="_blank" className="btn btn-light">View</a>
                                <a href="https://github.com/dylanaldrich/wayfarer_travel_app" target="_blank" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i class="devicon-python-plain"></i>
                                <i class="devicon-django-plain"></i>
                                <i class="devicon-postgresql-plain"></i>
                                <i class="devicon-html5-plain-wordmark"></i>
                                <i class="devicon-css3-plain-wordmark"></i>
                                <i class="devicon-bootstrap-plain"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Toolodex Section */}
                <div className="project-container d-flex align-items-center text-white" id="toolodex-section">
                    <div className="project container d-flex align-items-center">
                        <a href="https://tool-odex.herokuapp.com/login" target="_blank">
                            <img className="shadow project-img" src="https://i.ibb.co/61zWSxv/toolodex-home.png" alt="toolodex image" />
                        </a>
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://tool-odex.herokuapp.com/login" className="project-link" target="_blank">Toolodex</a>
                            </h2>
                            <p className="project-description mb-3">
                                A retro-themed productivity application that helps you to save and keep track of your favorite online tools, resources and documentation. Think of it like your browser's bookmarks feature, but with a lot of added functionality! Perfect for developers, teachers, or anyone who likes to keep their go-to sites organized.
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://tool-odex.herokuapp.com/login" target="_blank" className="btn btn-light">View</a>
                                <a href="https://github.com/dylanaldrich/toolodex" target="_blank" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i class="devicon-mongodb-plain"></i>
                                <i class="devicon-express-original"></i>
                                <i class="devicon-javascript-plain"></i>
                                <i class="devicon-nodejs-plain"></i>
                                <i class="devicon-jquery-plain"></i>
                                <i class="devicon-html5-plain-wordmark"></i>
                                <i class="devicon-css3-plain-wordmark"></i>
                                <i class="devicon-bootstrap-plain"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Song Quiz Section */}
                <div className="project-container d-flex align-items-center text-white" id="song-quiz-section">
                    <div className="project container d-flex align-items-center">
                        <a href="https://pages.git.generalassemb.ly/dylanaldrich/dylans-song-quiz/" target="_blank">
                            <img className="shadow project-img" src="https://i.ibb.co/rv6KtcK/songquiz-home.png" alt="toolodex image" />
                        </a>
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://pages.git.generalassemb.ly/dylanaldrich/dylans-song-quiz/" className="project-link" target="_blank">Toolodex</a>
                            </h2>
                            <p className="project-description mb-3">
                                Are you a big music lover? Try your hand at my interactive music trivia game! Listen to clips of famous songs, and try guess the correct title and artist. You have six rounds to rack up as many points as you can. Have fun playing (but beware, it's addictive)!
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://pages.git.generalassemb.ly/dylanaldrich/dylans-song-quiz/" target="_blank" className="btn btn-light">View</a>
                                <a href="https://github.com/dylanaldrich/toolodex" target="_blank" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i class="devicon-javascript-plain"></i>
                                <i class="devicon-jquery-plain"></i>
                                <i class="devicon-html5-plain-wordmark"></i>
                                <i class="devicon-css3-plain-wordmark"></i>
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