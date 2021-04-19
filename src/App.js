import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Admin from './Components/Home/Admin/Admin';
import Discount from './Components/Home/Discount/Discount';
import Footer from './Components/Home/Footer/Footer';
import Header from './Components/Home/Header/Header';
import Reviews from './Components/Home/Reviews/Reviews';
import Services from './Components/Home/Services/Services';
import Teams from './Components/Home/Teams/Teams';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/Home/Loggin/PrivateRoute/PrivateRoute'
import Login from './Components/Home/Loggin/Login/Loggin'
import AddService from './Components/Home/Admin/AddService/AddService';
import ManageService from './Components/Home/Admin/ManageService/ManageService';
import AddReview from './Components/Home/Admin/AddReview/AddReview';
import AddAdmin from './Components/Home/Admin/AddAdmin/AddAdmin';
import Booking from './Components/Home/Booking/Booking';
import Shipment from './Components/Home/Shipment/Shipment';
import OrderList from './Components/Home/Admin/OrderList/OrderList';
import AllOrderList from './Components/Home/Admin/AllOrderList/AllOrderList';
import Dashboard from './Components/Home/Admin/Dashboard/Dashboard';






export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>


      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <Route path="/manageService">
            <ManageService></ManageService>
          </Route>
          <Route path="/addReview">
            <AddReview></AddReview>
          </Route>
          <Route path="/addAdmin">
            <AddAdmin></AddAdmin>
          </Route>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          <Route path="/shipment">
            <Shipment></Shipment>
          </Route>
          <Route path="/orderList">
            <OrderList></OrderList>
          </Route>
          <Route path="/allOrderList">
            <AllOrderList></AllOrderList>
          </Route>
        
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

{/* <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route> */}


        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
