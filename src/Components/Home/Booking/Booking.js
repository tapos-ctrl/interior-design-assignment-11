import React, { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Navbar from '../Header/Navbar/Navbar';
import './Booking.css'


const Booking = () => {
  const { id } = useParams();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [checkOut, setCheckOut] = useState([])

  console.log(checkOut.length)
  useEffect(() => {
    fetch('https://blooming-gorge-51801.herokuapp.com/services')
      .then(res => res.json())
      .then(data => setCheckOut(data))
  }, [])

  const selected = checkOut.find(product => product._id === id)

  const handleName = () => {
    setLoggedInUser({ ...selected, ...loggedInUser });
  }

  return (
    <div className="booking-body">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-md-12 booking-new">
            <div style={{ textAlign: 'center' }}>
              <div className="">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Products</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selected?.sName}</td>
                    <td>{checkOut.length}</td>
                    <td>{selected?.price}</td>
                  </tr>
                </tbody>
              </table>

              <button class="btn-primary check-out-btn"><Link to="/shipment" className="text-white " onClick={handleName}>CheckOut</Link></button>
            </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Booking;