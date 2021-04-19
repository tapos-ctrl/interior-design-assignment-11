import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section>
            <div className="footer pt-5 pb-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="about">
                                <h2>About</h2>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga odit quod a?</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="services">
                                <h2>Services</h2>
                                <ul>
                                    <li>Places to get lost</li>
                                    <li>Perfect Design</li>
                                    <li>Happy Clients</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="team">
                                <h2>Tema Member</h2>
                                <ul>
                                    <li>Alexender Gary</li>
                                    <li>John Abraham</li>
                                    <li>Silvia Stan</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <div className="review">
                                <h2>Review</h2>
                                <ul>
                                    <li>Alexender Gary</li>
                                    <li>John Abraham</li>
                                    <li>Silvia Stan</li>
                                </ul>
                            </div>
                        </div>
                        <div>
                        </div>
                        <div>
                        <FontAwesomeIcon className="social-icon" icon={faFacebook} />
                        <FontAwesomeIcon className="social-icon" icon={faInstagram} />
                        <FontAwesomeIcon className="social-icon" icon={faTwitter} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center">
            <p>© 2016 theme All rights reserved</p>
            </div>
        </section>
    );
};

export default Footer;