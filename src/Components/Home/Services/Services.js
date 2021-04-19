import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'


const Services = () => {
    const [service, setService] = useState([]);
    // console.log(service.length);
  
    useEffect(() => {
      fetch('https://blooming-gorge-51801.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setService(data))
    }, [])
    return (
        <section className="services mt-5">
            <div className="container">
                <div className="row">
                <div className="service-section text-center mb-5">
                    <h1>Services</h1>
                    {/* <h1>{service.length}</h1> */}
                </div>
                {
      service.map(service =><Service key={service._id} service={service}></Service>)
    }
            </div>
            </div>
        </section>
    );
};

export default Services;