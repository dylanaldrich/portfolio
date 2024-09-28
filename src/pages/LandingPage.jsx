import React from 'react';
import ReactTooltip from 'react-tooltip';

import cv_photo from '../assets/images/cv_photo.png';
import {skillsLogos} from '../variables/consts';

const LandingPage = () => {

    function generateSkills(array) {
        return array.map((skill, index) => {
            return (<i data-for="main" data-tip={skill.name} className={`m-2 mb-3 ${skill.icon}`} key={index}></i>);
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
                                I'm a well-traveled, multilingual software developer with a background in web development, education and the music industry. As a creative problem solver, I am passionate about using technology to bring people closer together, and closer to achieving their dreams. Based in Los Angeles, CA. <span className="pride">&#127987;&#65039;&#8205;&#127752;</span>
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
                            <img className="shadow project-img img-grow" src="https://i.ibb.co/Pxkjg1p/terribleblooms-home.png" alt="A Garden of Terrible Blooms Homepage" />
                        </a>
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">
                                <a href="https://www.terribleblooms.net" className="project-link" target="_blank" rel="noreferrer">A Garden of Terrible Blooms</a>
                            </h2>
                            <p className="project-description mb-3">
                                A fun client project designed and built as a home for an exciting new theater podcast. A Garden of Terrible Blooms is the brainchild of LA-based playwright, Sharon Yablon. In the midst of a global pandemic, she decided to convert her plays into a podcast, so they can be enjoyed from anywhere—no theater required! Her short plays tell stories of the weird and surreal, set in Los Angeles.
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://www.terribleblooms.net" target="_blank" rel="noreferrer" className="btn btn-light">View</a>
                                <a href="https://github.com/dylanaldrich/terribleblooms" target="_blank" rel="noreferrer" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i data-for="main" data-tip="Python" className="devicon-python-plain"></i>
                                <i data-for="main" data-tip="Django" className="devicon-django-plain"></i>
                                <i data-for="main" data-tip="PostgreSQL" className="devicon-postgresql-plain"></i>
                                <i data-for="main" data-tip="jQuery" className="devicon-jquery-plain"></i>
                                <i data-for="main" data-tip="Heroku" className="devicon-heroku-original"></i>
                                <i data-for="main" data-tip="HTML" className="devicon-html5-plain-wordmark"></i>
                                <i data-for="main" data-tip="CSS" className="devicon-css3-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* foodbook Section */}
                <div className="project-container d-flex align-items-center text-white mb-5" id="foodbook-section">
                    <div className="project container d-flex align-items-center">
                        <img className="shadow project-img" src="https://i.ibb.co/R9yRF0D/foodbook-home.png" alt="foodbook" />
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">foodbook</h2>
                            <p className="project-description mb-3">
                                A chef's best friend! This multi-server app is linked to an <a href="https://developer.edamam.com/" className="project-link font-weight-bold" target="_blank" rel="noreferrer">external API</a> that allows you to search through a database of millions of recipes, from all over the web. You can then save your favorite recipes into as many of your own personalized "foodbooks" as you like. Once the recipes are stored, you can open your foodbooks and easily find the right recipe, for the right occasion.
                            </p>
                            <a href="https://github.com/dylanaldrich/foodbook_client" target="_blank" rel="noreferrer" className="btn btn-light mb-3 h5 font-weight-bold">GitHub</a>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i data-for="main" data-tip="JavaScript" className="devicon-javascript-plain"></i>
                                <i data-for="main" data-tip="React" className="devicon-react-original"></i>
                                <i data-for="main" data-tip="Node.js" className="devicon-nodejs-plain"></i>
                                <i data-for="main" data-tip="Express" className="devicon-express-original"></i>
                                <i data-for="main" data-tip="MongoDB" className="devicon-mongodb-plain"></i>
                                <i data-for="main" data-tip="Heroku" className="devicon-heroku-original"></i>
                                <i data-for="main" data-tip="Bootstrap" className="devicon-bootstrap-plain"></i>
                                <i data-for="main" data-tip="HTML" className="devicon-html5-plain-wordmark"></i>
                                <i data-for="main" data-tip="CSS" className="devicon-css3-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wayfarer Section */}
                <div className="project-container d-flex align-items-center text-white mb-5" id="wayfarer-section">
                    <div className="project container d-flex align-items-center">
                        <img className="shadow project-img" src="https://i.ibb.co/YhYyhkP/wayfarer-home.png" alt="wayfarer" />
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">Wayfarer</h2>
                            <p className="project-description mb-3">
                                Put on your traveling shoes and check out this colorful travel blog, where you can share travel tips and stories about your favorite places around the globe! You can also interact with other users, read and comment on their posts.
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://github.com/dylanaldrich/wayfarer_travel_app" target="_blank" rel="noreferrer" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i data-for="main" data-tip="Python" className="devicon-python-plain"></i>
                                <i data-for="main" data-tip="Django" className="devicon-django-plain"></i>
                                <i data-for="main" data-tip="PostgreSQL" className="devicon-postgresql-plain"></i>
                                <i data-for="main" data-tip="Bootstrap" className="devicon-bootstrap-plain"></i>
                                <i data-for="main" data-tip="Heroku" className="devicon-heroku-original"></i>
                                <i data-for="main" data-tip="HTML" className="devicon-html5-plain-wordmark"></i>
                                <i data-for="main" data-tip="CSS" className="devicon-css3-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Toolodex Section */}
                <div className="project-container d-flex align-items-center text-white mb-5" id="toolodex-section">
                    <div className="project container d-flex align-items-center">
                        <img className="shadow project-img" src="https://i.ibb.co/61zWSxv/toolodex-home.png" alt="toolodex" />
                        <div className="text-left my-3">
                            <h2 className="font-weight-bold project-title">Toolodex</h2>
                            <p className="project-description mb-3">
                                A retro-themed productivity application that helps you to save and keep track of your favorite online tools, resources and documentation. Think of it like your browser's bookmarks feature, but with a lot of added functionality! Perfect for developers, teachers, or anyone who likes to keep their go-to sites organized.
                            </p>
                            <p className="mb-3 h5 font-weight-bold">
                                <a href="https://github.com/dylanaldrich/toolodex" target="_blank" rel="noreferrer" className="btn btn-light">GitHub</a>
                            </p>
                            <p className="mb-2 font-weight-bold">Technologies used:</p>
                            <div className="logo-container d-flex justify-content-between project-tech-logos">
                                <i  data-for="main" data-tip="JavaScript" className="devicon-javascript-plain"></i>
                                <i  data-for="main" data-tip="Node.js" className="devicon-nodejs-plain"></i>
                                <i  data-for="main" data-tip="Express" className="devicon-express-original"></i>
                                <i  data-for="main" data-tip="MongoDB" className="devicon-mongodb-plain"></i>
                                <i  data-for="main" data-tip="jQuery" className="devicon-jquery-plain"></i>
                                <i  data-for="main" data-tip="Bootstrap" className="devicon-bootstrap-plain"></i>
                                <i  data-for="main" data-tip="Heroku" className="devicon-heroku-original"></i>
                                <i  data-for="main" data-tip="HTML" className="devicon-html5-plain-wordmark"></i>
                                <i  data-for="main" data-tip="CSS" className="devicon-css3-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Song Quiz Section */}
                <div className="project-container d-flex align-items-center text-white mb-2" id="song-quiz-section">
                    <div className="project container d-flex align-items-center">
                        <a href="https://pages.git.generalassemb.ly/dylanaldrich/dylans-song-quiz/" target="_blank" rel="noreferrer">
                            <img className="shadow project-img img-grow" src="https://i.ibb.co/rv6KtcK/songquiz-home.png" alt="song quiz" />
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
                                <i data-for="main" data-tip="JavaScript" className="devicon-javascript-plain"></i>
                                <i data-for="main" data-tip="jQuery" className="devicon-jquery-plain"></i>
                                <i data-for="main" data-tip="HTML" className="devicon-html5-plain-wordmark"></i>
                                <i data-for="main" data-tip="CSS3" className="devicon-css3-plain-wordmark"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills">
                <h2 className="font-weight-bold my-4 text-white section-title">SKILLS</h2>
                <div className="d-flex flex-column align-items-center text-white mb-1 py-3" id="skills-section">
                    <div className="skills-grid d-flex flex-wrap justify-content-center">{generateSkills(skillsLogos)}</div>
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
