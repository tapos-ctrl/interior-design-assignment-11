import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Sidebar2 = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);


    useEffect(() => {
        fetch("https://blooming-gorge-51801.herokuapp.com/isAdmin", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div>
            <ul className="list-unstyled">
                <li>
                    <Link to="/dashboard"><span>Dashboard</span>
                    </Link>
                </li>
                {isAdmin && <div>
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
                    </li></div>}
            </ul>
        </div>
    );
};

export default Sidebar2;