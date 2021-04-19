import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    // console.log(service.length);

    useEffect(() => {
        fetch('https://blooming-gorge-51801.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="reviews pt-5">
            <div className="container">
                <div className="row">
                    <div className="service-section text-center mb-5">
                        <h1 className="pt-5">Reviews</h1>
                    </div>
                    {
                        reviews.map(review => <Review key={review._id} review={review}></Review>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;