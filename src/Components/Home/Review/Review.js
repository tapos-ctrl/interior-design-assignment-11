import React from 'react';

const Review = ({review}) => {
    console.log(review);
    return (
        <div className="col-md-6 col-lg-4 col-sm-12">
            <div className="card-body " >
                <img className="team-img" src={review.photo} width="100%" height="200px" alt="" />
                <div className="text-center">
                <h5 className="card-title mt-4">{review.name}</h5>    
                <p>{review.review}</p> 
                </div>            
            </div>
        </div>        
    );
};

export default Review;