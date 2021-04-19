import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../../App';
import { useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../Header/Navbar/Navbar';

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      const { displayName, email, photoURL } = result.user;
      const signedInUser = { name: displayName, email, photo: photoURL }
      setLoggedInUser(signedInUser);
      storeAuthToken();
    }).catch(function (error) {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  const storeAuthToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem('token', idToken);
        history.replace(from);
      }).catch(function (error) {
        // Handle error
      });
  }

  return (
    <div>
      <Navbar></Navbar>
      
    <div className="login-page container">
      
      
      <div className="row align-items-center d-flex align-items-center" style={{ height: "100vh" }}>
        <div className="col-md-12 shadow pt-5  ">
          
          
          
          <div className="mt-5 d-flex justify-content-center mb-5 pb-5">
            <button className="btn btn mt-4 view-more-btn" onClick={handleGoogleSignIn}>Google Sign in</button>
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default Login;