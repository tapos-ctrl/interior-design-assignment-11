import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../../../App'


const Sidebar = () => {

    const [loggedInUser, setLoggedInUser] = UserContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch("http://localhost:5000/isAdmin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])


    return (
        <div>
            <h1>this is sidebar</h1>
            <h1>why you are not coming</h1>
        {(isAdmin > 0) && <ul className="list-unstyled">
            <li>
                <Link to="/dashboard"><span>Dashboard</span>
                </Link>
            </li>
            { isAdmin && <div>
                <li>
                <Link to="/addService"><span>Add Service</span> 
                </Link>
            </li>
            <li>
                <Link to="/manageService"><span>Manage Service</span> 
                </Link>
            </li>
            <li>
                <Link to="/addReview"><span>Add Review</span> 
                </Link>
            </li>
            <li>
                <Link to="/addAdmin"><span>Add Admin</span> 
                </Link>
            </li>
            <li>
                <Link to="/orderList"><span>Order List</span> 
                </Link>
            </li>
            <li>
                <Link to="/allOrderList"><span>All Order List</span> 
                </Link>
            </li>
                </div>}
        </ul>}
        </div>
    );
};

export default Sidebar;