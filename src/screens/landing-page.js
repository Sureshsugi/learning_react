import React from "react";
import {NavLink} from "react-router-dom";

const LandingScreen = () => {
  return(
    <div>
      <h1>This is the Landing Screen</h1>
      <NavLink to="/login">Go to Login Page</NavLink>
      <br />
      <NavLink to="/home">Go to Home Page</NavLink>
      <br />
      <NavLink to="/contact">Go to Contact Page</NavLink>
      <br />
      <NavLink to="/todo">Go to Todo App Page</NavLink>
      <br />
      <NavLink to="/signup">go to Userlogin page </NavLink>
      <br />
      <NavLink to="/Account">go to Userlogin page </NavLink>
      <br />
      <NavLink to="/user">Create New Account </NavLink>
      <br />
      <NavLink to="/all">load All Users </NavLink>
      <br />
      <NavLink to="/post">post all Users account</NavLink>
      <br />
      <NavLink to="/products"> products account user</NavLink>
      <br />
      <NavLink to="/api"> api creating user</NavLink>
      <br />
      <NavLink to="/curd"> Simple CRUD Operation using Node JS</NavLink>
      <br />
    </div>
    
    
    
  )
}

export default LandingScreen;