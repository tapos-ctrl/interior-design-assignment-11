import React from 'react';
import './Team.css'
const Team = (props) => {
    const { name, image } = props.data;
    // console.log(props)
    return (
        <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="card-body " >
                <img className="team-img" src={image} width="100%" height="200px" alt="" />
                <h5 className="card-title mt-4">{name}</h5>                 
            </div>
        </div> 
    );
};

export default Team;