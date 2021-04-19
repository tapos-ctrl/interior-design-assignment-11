import React, { useEffect, useState } from 'react';
import AdminNavbar from '../AdminNavbar/AdminNavbar';
import Sidebar from '../Sidebar/Sidebar';
import Sidebar2 from '../Sidebar2/Sidebar2';

const ManageService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  const deleteProduct = (event, id) =>{
    console.log(id)
    fetch(`http://localhost:5000/delete/${id}`,{
      method:'DELETE'
    })
      .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  }
  return (
    <section className="container-fluid row">
    {/* <Sidebar2></Sidebar2> */}
    <div className="col-md-4">
    <AdminNavbar></AdminNavbar>
    </div>
    <div className="col-md-8 p-4 pr-5 mt-5 " style={{ borderRadius:"10px", position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>

    <table className="table">
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
        {
          services.map(service => {
            return (

              <>

                <tbody>
                  <tr>
                    <td>{service.sName}</td>
                    <td>{service.price}</td>
                    <td><button style={{borderRadius: '5px'}} className="btn-danger" onClick={()=> deleteProduct( service._id)}>delete</button></td>
                  </tr>

                </tbody>

              </>
            )
          })
        }


      </table>
      
    </div>
</section>
  );
};

export default ManageService;