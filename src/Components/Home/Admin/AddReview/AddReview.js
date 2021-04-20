import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar2/Sidebar2';

const AddReview = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('photo', loggedInUser.photo);
        formData.append('name', loggedInUser.name);
        formData.append('review', info.review);

        fetch('https://blooming-gorge-51801.herokuapp.com/addReview', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            {/* <Sidebar2></Sidebar2> */}
            <div className="col-md-4">
            <AdminNavbar></AdminNavbar>
            </div>
            <div className="col-md-8 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Please Write a Review</h5>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Your Name</label>
                        <input  defaultValue={loggedInUser.name} onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Review</label>
                        <textarea onBlur={handleBlur} type="text" className="form-control" name="review" placeholder="Add a review" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddReview;