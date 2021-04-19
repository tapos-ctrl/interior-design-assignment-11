 import React from 'react';
 import './Discount.css';
 import image from '../../../images/discount-2.png';
 const Discount = () => {

     return (
        <section className="discount mt-5">
            <div className="container">
                <div className="row">
                    <div className="discount-offer">
                      <div className="col-md-6 col-sm-12">
                          <img src={image} alt=""/>
                      </div>
                      <div className="col-md-6 col-sm-12 ms-auto">
                        <h1>DISCOUNT</h1>
                        <h4>Last Date: 30/4/2021</h4>

                      </div>
                    </div>
                </div>
            </div>
        </section>
     );
 };
 
 export default Discount;