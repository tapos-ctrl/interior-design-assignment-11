import React from 'react';
import Admin from './Admin/Admin';
import Discount from './Discount/Discount';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';
import Teams from './Teams/Teams';

const Home = () => {
    return (
        <div>
        <Header></Header>
        <Services></Services>
        <Discount></Discount>
        <Teams></Teams>
        <Reviews></Reviews>
        <Footer></Footer>
        {/* <Admin></Admin> */}
        </div>
    );
};

export default Home;