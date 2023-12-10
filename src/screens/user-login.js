import React, {useState} from "react";

import "../css/user-login.css";

const Userlogin = () => {

    const [loginForm, updateLoginForm] = useState({
        emailField :"",
        passwordField :""
    })

    const getInputVaule = (event) => {

        updateLoginForm({...loginForm, [event.target.id] : event.target.value});

    }

    const submitLogin = () => {
        console.log(loginForm);
    }
    return (
        <div>
            <h1>user account login </h1>
            <div className="space">
                <label className="label-width">Enter your Email ID :</label>
                <input id="emailField" type="text" placeholder="Enter email id " onChange={getInputVaule}></input>
            </div>

            <div className="space">
                <label className="label-width">Enter your password :</label>
                <input id="passwordField" type="password" placeholder="Enter password" onChange={getInputVaule}></input>
            </div>
            
            <div className="space">
                <button onClick={()=> submitLogin()}>Login</button>


            </div>

        </div>
    )
}

export default Userlogin;