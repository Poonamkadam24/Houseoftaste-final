import React, { useState } from 'react';
import axios from 'axios';
import { NavLink,useNavigate} from 'react-router-dom';

// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import Signup from './Signup';
// import "C:\Users\HP\OneDrive\Desktop\bas_yuhi\my-app\public\assets\css\login.css";
function Login(props){
    const navigate=useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/home/signin', { email, password });
        console.log(response.data); // success message or JWT
        navigate('/main');
      } catch (error) {
        console.error(error);
      }
    };
    return(
	<div className="container1">
         <form className="login-form" onSubmit={handleSubmit}>
            <h2 >Login</h2>
            <hr/>
            <br/>
         
            Email:<input type="email" placeholder="Enter email"  id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
       

            Password:<input type="password" placeholder="Enter password"  id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
            <button className="login"><a href="/itemdata" style={{textDecoration:"none",color:'white'}}>Login</a></button>
            <br/>
            <br/>
            <hr/>
            <br/>
            <div className="forget">
            <div><p>Dont have an account?</p>
             <a href="/signup" >Click here</a></div>
            </div>
        </form>
        <div/></div>
    )
}



export default Login;   