import React, { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    // const [loggedInUser, setLoggedInUser] = useContext(useFormContext);
    console.log(service);
    return (
        <div className="col-md-4 col-sm-12">
            <div className="card-body " >
                <img src={`data:image/png;base64,${service.image.img}`} className="service-box" width="100%" height="200px" alt="" />
                <div className="text-center ">
                    <h5 className="card-title mt-4">{service.sName}</h5>
                    <h3 style={{ color: "silver" }} className="card-text">{service.price}</h3>     
                    <button className="btn btn read-btn text-center"><Link to={`/booking/${service._id}`} class="btn btn read-primary text-center">Book Now</Link></button>          
                </div>
                
            </div>
        </div>
    );
};

export default Service;