import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
// import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar2/Sidebar2';

const AddAdmin = () => {
  const [loggedInUser, setLoggedInUser] =useContext(UserContext)
    const [info, setInfo] = useState({});
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('email', info.email);

        fetch('http://localhost:5000/addAdmin', {
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
                <h5 className="text-brand">Add a Service</h5>
                <form onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Please Add a Admin</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Add Admin" />
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddAdmin;