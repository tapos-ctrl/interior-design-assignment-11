import React from 'react';
import './Header.css'
import HeaderMain from './HeaderMain/HeaderMain';
import Navbar from './Navbar/Navbar';
const Header = () => {
    return (
        <div>
        <Navbar></Navbar>
        <section className="header">
                
                <HeaderMain></HeaderMain>
        </section >
        </div>
    );
};

export default Header;