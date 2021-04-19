import React from 'react';
import Admin from '../Admin';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
// import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar2/Sidebar2';
import './Dashboard.css'

const Dashboard = () => {


  
  return (
    <div className="row">
      <div className="col-md-4">
        {/* <Sidebar2></Sidebar2> */}
        <AdminNavbar></AdminNavbar>
      </div>
      <div className="col-md-8 dashboard-h">

        <div className="dashboard">
        <h1>Welcome To Dashboard</h1>
        {/* <Admin></Admin> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;