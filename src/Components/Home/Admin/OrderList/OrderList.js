import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar2/Sidebar2';
// import { UserContext } from '../../../App';
// import Sidebar from '../Sidebar/Sidebar';

const OrderList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [order, setOrder] = useState({})
  console.log(loggedInUser.email);
  useEffect(() => {
    fetch('https://blooming-gorge-51801.herokuapp.com/orders?email='+loggedInUser.email)
    .then(res => res.json())
    .then(data =>setOrder(data))
  }, [loggedInUser])
  return (
    <section className="container-fluid row">
            {/* <Sidebar2></Sidebar2> */}
            <div className="col-md-4">
            <AdminNavbar></AdminNavbar>
            </div>
             { (order.length > 0) &&
              <div className="col-md-8 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
              <h5 className="text-brand">Order List {order.length}</h5>
              <table class="table">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {
          order.map(order => {
            return (

              <>

                <tbody>
                  <tr>
                    <td>{order.name}</td>
                    <td>{order.price}</td>
                  </tr>

                </tbody>

              </>
            )
          })
        }


      </table>
      
          </div>}
            
             
        </section>
  );
};

export default OrderList;