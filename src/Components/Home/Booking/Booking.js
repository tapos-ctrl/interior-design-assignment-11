import React, {useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../../App';
import Navbar from '../Header/Navbar/Navbar';
// import { UserContext } from '../../App';
// import Navbar from '../Share/Navbar/Navbar';
import './Booking.css'


const Booking = () => {
  const { id } = useParams();
  // console.log(id)
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // console.log(loggedInUser);
  const [checkOut, setCheckOut] = useState([])
  // const [pName, setPName] = useState([])

  console.log(checkOut.length)
  useEffect(() => {
    fetch('https://blooming-gorge-51801.herokuapp.com/services')
    .then(res => res.json())
    .then(data => setCheckOut(data))
  }, [])

  const selected =checkOut.find(product =>product._id === id)
  // setPName(selected);
  // setLoggedInUser(pName);
  
  const handleName = () =>{
    setLoggedInUser({...selected, ...loggedInUser});
  }
  
  return (
<div>
  <div>
  <Navbar></Navbar>
  </div>
<div className="tb mt-5 d-flex justify-content-center container">
  <div className="row">
    <div className="col-md-12">
    <div style={{ textAlign: 'center' }}>

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

<button class="btn-primary"><Link to="/shipment" className="text-white" onClick={handleName}>CheckOut</Link></button>
</div>
    </div>
  </div>

</div>

    
    </div>
  );
};

export default Booking;