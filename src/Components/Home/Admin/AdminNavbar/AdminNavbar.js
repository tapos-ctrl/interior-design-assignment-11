import React from 'react';
import './AdminNavbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFirstOrder } from '@fortawesome/free-brands-svg-icons';
import { faListOl, faPlus, faTasks, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const AdminNavbar = () => {
    return (
        <div className="adminNavbar ">
            <div class="container adminNavbar">
                {/* <a style={{textAlign:'left'}} class="logo" href="#">Navbar</a> */}
                {/* <h4>Cozy</h4> */}
                <ul>
                {/* <li>
                    <Link to="/addService"><span>Add Service</span> 
                    </Link> */}
                {/* </li> */}
                <li>
                        <Link class="nav-link" to="/dashboard"><FontAwesomeIcon className="navbar-icon" icon={faTasks} />Dashboard</Link>
                    </li>
                    <li>
                        <Link class="nav-link" to="/addService"><FontAwesomeIcon className="navbar-icon" icon={faPlus} />Add Service</Link>
                    </li>
                    <li>
                        <Link class="nav-link" to="/manageService"><FontAwesomeIcon className="navbar-icon" icon={faTrash} />Manage Service</Link>
                    </li>
                    <li>
                        <Link class="nav-link" to="/addReview"><FontAwesomeIcon className="navbar-icon" icon={faUserPlus} />Add Review</Link>
                    </li><li>
                        <Link class="nav-link" to="/addAdmin"><FontAwesomeIcon className="navbar-icon" icon={faUserPlus} />Add Admin</Link>
                    </li>
                    <li>
                        <Link class="nav-link" to="/orderList"><FontAwesomeIcon className="navbar-icon" icon={faListOl} />Order List</Link>
                    </li>
                    <li>
                        <Link class="nav-link" to="/allOrderList"><FontAwesomeIcon className="navbar-icon" icon={faListOl} />All Order List</Link>
                    </li>                    
                </ul>
            </div>
        </div>

    );
};

export default AdminNavbar;