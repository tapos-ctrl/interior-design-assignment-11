import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Navbar from '../Header/Navbar/Navbar';
// import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
// import Navbar from '../Share/Navbar/Navbar';

const Shipment = () => {

  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [shippingData, setShippingData] = useState(null)
  // console.log(loggedInUser);

  const onSubmit = data => {
setShippingData(data);
    };

    const handlePaymentSuccess = paymentId => {
      
      const orderDetails = {
        ...loggedInUser,
         shipment: shippingData, 
         paymentId,
         orderTime: new Date()
        };

        console.log(orderDetails);

      fetch('http://localhost:5000/addOrder',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
.then(res => res.json())
.then(data => {
  console.log(data);
})
    }

  console.log(watch("example")); // watch input value by passing the name of it



  return (
    <div className="row">
      <Navbar/>
<div className="col-md-6">
<form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
      {errors.name && <span className="error">Name is required</span>}
     
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })}  placeholder="Your Email"/>
      {errors.email && <span className="error">Email is required</span>}
     
      <input name="address" ref={register({ required: true })}  placeholder="Your Address" />
      {errors.address && <span className="error">Address is required</span>}
     
      <input name="phone" ref={register({ required: true })}  placeholder="Your Phone Number"/>
      {errors.phone && <span className="error">Phone Number is required</span>}

      {/* <input name="product" ref={register({ required: true })}  placeholder="Your Product Name"/>
      {errors.phone && <span className="error">Phone Number is required</span>} */}
      
      <input type="submit" />
    </form>
</div>
<div className="col-md-6">
  <h2>PLEASE PAY  FOR ME</h2>
  <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
</div>
</div>
  );
};

export default Shipment;