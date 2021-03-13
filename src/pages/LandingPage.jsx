import React from 'react';
import ReactTooltip from 'react-tooltip';

import cv_photo from '../assets/images/cv_photo.png';
import {skillsLogos} from '../variables/consts';

const LandingPage = () => {
    
    function generateSkills(array) {
        return array.map((skill) => {
            return (<i className={`m-2 mb-3 ${skill}`} key={array.indexOf(skill)}></i>);
        });
    }

    return (
        <div className="page-container">
            {/* Header */}
            <header className="jumbotron d-flex align-items-end my-0">
                <div className="header-text mx-auto text-white mt-3">
                    <h1 className="display-4 font-weight-bold">Dylan Aldrich</h1>
                    <p className="h3 font-weight-bold">Software Engineer</p>
                </div>
            </header>

            {/* About Section */}
            <section id="about" className="d-flex justify-content-around">
                <div className="container row text-white text-left my-3">
                    <div id="about-content" className="d-flex align-items-center">
                        <img src={cv_photo} alt="dylan aldrich"/>
                        <div>
                            <h2 className="text-uppercase font-weight-bold">About Me</h2>
                            <p className="lead">
                                I’m a well-traveled, multilingual software developer with a background in web development, education and the music industry. As a creative problem solver, I am passionate about using technology to bring people closer together, and closer to achieving their dreams. Based in Los Angeles, CA. <span className="pride">&#127987;&#65039;&#8205;&#127752;</span>
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://www.linkedin.com/in/dylanaldrich/" target="_blank" rel="noreferrer" className="btn btn-light">LinkedIn</a>
                                <a href="https://github.com/dylanaldrich" target="_blank" rel="noreferrer" className="btn btn-light">GitHub</a>
                            </p>
                            <div className="d-flex align-items-center" id="email">
                                <i className="far fa-envelope mr-2 ml-0" id="envelope"></i>
                                <a href="mailto:aldrich.dylan@gmail.com" className="font-weight-bold mb-0 mx-0 project-link">aldrich.dylan@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <h2 className="font-weight-bold my-4 text-white section-title">PROJECTS</h2>

                {/* AGOTB Section */}
                <div className="project-container d-flex align-items-center text-white mb-5" id="agotb-section">
                    <div className="project container d-flex align-items-center">
                        <a href="https://www.terribleblooms.net" target="_blank" rel="noreferrer">
                            <img className="shadow project-img" src="https://i.ibb.co/pZf2jjP/terribleblooms-home.png" alt="A Garden of Terrible Blooms Homepage" />
                        </a>
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://www.terribleblooms.net" className="project-link" target="_blank" rel="noreferrer">A Garden of Terrible Blooms</a>
                            </h2>
                            <p className="project-description mb-3">
                                A fun client project designed and built as a home for an exciting new theater podcast. A Garden of Terrible Blooms is the brainchild of LA-based playwright, Sharon Yablon. In the midst of a global pandemic, she decided to convert her plays into a podcast, so they can be enjoyed from anywhere—no theater required! Her short plays tell stories of the weird and surreal, set in Los Angeles. The podcast is available to stream or download on all major podcast apps. Subscribe now!
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://www.terribleblooms.net" target="_blank" rel="noreferrer" className="btn btn-light">View</a>
                                <a href="https://github.com/dylanaldrich/terribleblooms" target="_blank" rel="noreferrer" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i className="devicon-python-plain"></i>
                                <i className="devicon-django-plain"></i>
                                <i className="devicon-postgresql-plain"></i>
                                <i className="devicon-jquery-plain"></i>
                                <i className="devicon-heroku-original"></i>
                                <i className="devicon-html5-plain-wordmark"></i>
                                <i className="devicon-css3-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* foodbook Section */}
                <div className="project-container d-flex align-items-center text-white mb-5" id="foodbook-section">
                    <div className="project container d-flex align-items-center">
                        <a href="https://foodbook-recipeapp.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="shadow project-img" src="https://i.ibb.co/R9yRF0D/foodbook-home.png" alt="foodbook" />
                        </a>
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://foodbook-recipeapp.herokuapp.com/" className="project-link" target="_blank" rel="noreferrer">foodbook</a>
                            </h2>
                            <p className="project-description mb-3">
                                A chef's best friend! This multi-server app is linked to an <a href="https://developer.edamam.com/" className="project-link font-weight-bold" target="_blank" rel="noreferrer">external API</a> that allows you to search through a database of millions of recipes, from all over the web. You can then save your favorite recipes into as many of your own personalized "foodbooks" as you like. Once the recipes are stored, you can open your foodbooks and easily find the right recipe, for the right occasion.
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://foodbook-recipeapp.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-light">View</a>
                                <a href="https://github.com/dylanaldrich/foodbook_client" target="_blank" rel="noreferrer" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i className="devicon-react-original"></i>
                                <i className="devicon-mongodb-plain"></i>
                                <i className="devicon-express-original"></i>
                                <i className="devicon-nodejs-plain"></i>
                                <i className="devicon-javascript-plain"></i>
                                <i className="devicon-heroku-original"></i>
                                <i className="devicon-bootstrap-plain"></i>
                                <i className="devicon-html5-plain-wordmark"></i>
                                <i className="devicon-css3-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wayfarer Section */}
                <div className="project-container d-flex align-items-center text-white mb-5" id="wayfarer-section">
                    <div className="project container d-flex align-items-center">
                        <a href="https://wayfarer-bld.herokuapp.com/" target="_blank" rel="noreferrer">
                            <img className="shadow project-img" src="https://i.ibb.co/YhYyhkP/wayfarer-home.png" alt="wayfarer" />
                        </a>
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://wayfarer-bld.herokuapp.com/" className="project-link" target="_blank" rel="noreferrer">Wayfarer</a>
                            </h2>
                            <p className="project-description mb-3">
                                Put on your traveling shoes and check out this colorful travel blog, where you can share travel tips and stories about your favorite places around the globe! You can also interact with other users, read and comment on their posts.
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://wayfarer-bld.herokuapp.com/" target="_blank" rel="noreferrer" className="btn btn-light">View</a>
                                <a href="https://github.com/dylanaldrich/wayfarer_travel_app" target="_blank" rel="noreferrer" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i className="devicon-python-plain"></i>
                                <i className="devicon-django-plain"></i>
                                <i className="devicon-postgresql-plain"></i>
                                <i className="devicon-bootstrap-plain"></i>
                                <i className="devicon-heroku-original"></i>
                                <i className="devicon-html5-plain-wordmark"></i>
                                <i className="devicon-css3-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Toolodex Section */}
                <div className="project-container d-flex align-items-center text-white mb-5" id="toolodex-section">
                    <div className="project container d-flex align-items-center">
                        <a href="https://tool-odex.herokuapp.com/login" target="_blank" rel="noreferrer">
                            <img className="shadow project-img" src="https://i.ibb.co/61zWSxv/toolodex-home.png" alt="toolodex" />
                        </a>
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://tool-odex.herokuapp.com/login" className="project-link" target="_blank" rel="noreferrer">Toolodex</a>
                            </h2>
                            <p className="project-description mb-3">
                                A retro-themed productivity application that helps you to save and keep track of your favorite online tools, resources and documentation. Think of it like your browser's bookmarks feature, but with a lot of added functionality! Perfect for developers, teachers, or anyone who likes to keep their go-to sites organized.
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://tool-odex.herokuapp.com/login" target="_blank" rel="noreferrer" className="btn btn-light">View</a>
                                <a href="https://github.com/dylanaldrich/toolodex" target="_blank" rel="noreferrer" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i className="devicon-mongodb-plain"></i>
                                <i className="devicon-express-original"></i>
                                <i className="devicon-javascript-plain"></i>
                                <i className="devicon-nodejs-plain"></i>
                                <i className="devicon-jquery-plain"></i>
                                <i className="devicon-bootstrap-plain"></i>
                                <i className="devicon-heroku-original"></i>
                                <i className="devicon-html5-plain-wordmark"></i>
                                <i className="devicon-css3-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Song Quiz Section */}
                <div className="project-container d-flex align-items-center text-white mb-2" id="song-quiz-section">
                    <div className="project container d-flex align-items-center">
                        <a href="https://pages.git.generalassemb.ly/dylanaldrich/dylans-song-quiz/" target="_blank" rel="noreferrer">
                            <img className="shadow project-img" src="https://i.ibb.co/rv6KtcK/songquiz-home.png" alt="song quiz" />
                        </a>
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://pages.git.generalassemb.ly/dylanaldrich/dylans-song-quiz/" className="project-link" target="_blank" rel="noreferrer">Song Quiz</a>
                            </h2>
                            <p className="project-description mb-3">
                                Are you a big music lover? Try your hand at my interactive music trivia game! Listen to clips of famous songs, and try to guess the correct title and artist. You have six rounds to rack up as many points as you can. Have fun playing (but beware, it's addictive)!
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://pages.git.generalassemb.ly/dylanaldrich/dylans-song-quiz/" target="_blank" rel="noreferrer" className="btn btn-light">View</a>
                                <a href="https://github.com/dylanaldrich/toolodex" target="_blank" rel="noreferrer" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i className="devicon-javascript-plain"></i>
                                <i className="devicon-jquery-plain"></i>
                                <i className="devicon-html5-plain-wordmark"></i>
                                <i className="devicon-css3-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills">
                <h2 className="font-weight-bold my-4 text-white section-title">SKILLS</h2>
                <div className="d-flex flex-column align-items-center text-white mb-1 py-3" id="skills-section">
                    <div className="skills-grid d-flex flex-wrap justify-content-center">
                    {generateSkills(skillsLogos)}
                    </div>
                    <div className="pt-2 d-flex align-items-center">
                        <h4>Languages:</h4>
                        <h2 className="h1 ml-2" id="languages">
                            <span
                                data-for="main"
                                data-tip="English"
                                className="flag mr-2">
                                    &#127468;&#127463;
                            </span>
                            <span 
                                data-for="main"
                                data-tip="Español"
                                className="flag mr-2">
                                    &#127466;&#127480;
                            </span>
                            <span 
                                data-for="main"
                                data-tip="Français"
                                className="flag">
                                    &#127467;&#127479;
                            </span>
                        </h2>
                        <ReactTooltip
                            id="main"
                            type="dark"
                            effect="float"
                        />
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer mt-auto">
                <div className="text-left ml-2">
                    <span className="text-white font-weight-bold" id="copyright">&copy; {(new Date().getFullYear())} Dylan Aldrich</span>
                </div>
            </footer>
        </div>
    )
};

export default LandingPage;