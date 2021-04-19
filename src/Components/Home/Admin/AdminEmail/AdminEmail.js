import React from 'react';
import './AdminEmail.css'
const AdminEmail = () => {
    return (
        <div className=" d-flex justify-content-start">
            <div className="col-md-7 p-4">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label input-title text-sm-start">Admin</label>
                    <div class="input-group mb-3">
                        <input type="email" class="form-control" placeholder="Enter your email" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                            <button class="btn btn-outline-secondary" type="button" id="button-addon2">Submit</button>
                    </div>
                </div>
            </div>
            </div>
    );
};

export default AdminEmail;