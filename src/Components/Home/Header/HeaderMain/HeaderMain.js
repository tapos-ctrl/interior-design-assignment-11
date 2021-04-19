import React from 'react';
import './HeaderMain.css';
const HeaderMain = () => {
    return (
        <div className="container pt-5">
            <div className="row">
                <div className="header-main">
                    <div className="col-sm-12">
                        <h1>Interior<span> Design</span> <br />Solutions </h1>
                        <p>Lorem ipsum dolor sit amet elit. Ipsum aliquam iste iure laborum <br /> quaerat tenetur, facilis rem voluptate dolore</p>
                        <button className="btn btn mt-4 view-more-btn">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;