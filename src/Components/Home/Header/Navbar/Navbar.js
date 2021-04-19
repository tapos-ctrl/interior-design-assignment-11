import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div class="navbar-background">     
         <div className="container">
                <div className="row">
                    <nav class="navbar navbar-expand-lg nav-bar navbar navbar-default navbar-fixed-top navbar-light">
                        <div class="container-fluid">
                            <Link class="navbar-brand text-white" style={{fontWeight:"800",fontSize:"30px"}} to="#">Cozy</Link>
                            <button class="navbar-toggler nav-bar-btn text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false">
                                <span class="navbar-toggler-icon nav-bar-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse nav-list" id="navbarSupportedContent">
                                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li class="nav-item">
                                        <Link class="nav-link active text-center text-white" aria-current="page" to="/">Home</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link text-center text-white" to="/dashboard">Dashboard</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link text-center text-white style= " to="/login">Login</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link text-center text-white" to="#">Blog</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="nav-link text-center text-white" to="#">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </div>
                </div>
        </div>
       
    );
};

export default Navbar;