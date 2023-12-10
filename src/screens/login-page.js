import React from "react";
import{NavLink} from "react-router-dom";
import "../css/Login.css";



const LoginScreen = () =>{

    const message = "Welcome to react "
    
    const welcomeMessage = () => {
        alert("welcome to react");
    }

    const captureEvent = ( event) => {
        console.log (event);
    }
    
    return(
        <div>
            <h1 className="headling"> Login Page {message}</h1>
            <NavLink to="home"> Go to home</NavLink>
            <button onClick={() => welcomeMessage()} >Print message </button>
            <br></br>

            <label>Enter your message</label>
            <input type="text" placeholder="Enter your message" onChange={captureEvent} />

        </div>
    )
}

export default LoginScreen;