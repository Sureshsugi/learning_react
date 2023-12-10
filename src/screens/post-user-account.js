import React, { useState } from "react";
import axios from "axios";
import { getValue } from "@testing-library/user-event/dist/utils";

const Postuseraccount =() => {

    const[ registerForm, updateregisterForm] = useState({
        email : ""
        
        
          
    })

    const getValueFormInput =() => {
        updateregisterForm({...registerForm,[event.target.id] : event.target.value})
    }

    const submitregister =() => {
       // console.log(registerForm);
       const url ="https://reqres.in/api/register";
       
       axios.post(url, registerForm )
       .then((Response) => {
        console.log(Response);
        alert("Success- user register");
       })
       .catch((error) =>{
        console.error (error);
        alert("Failed-conatct admin")
       })


    }

    return(
        <div>
            <h2>Post user account</h2>
            <div>
                <label>Enter user email id :</label>
                <input id="email" type="text" placeholder="Enter Email" onChange={getValueFormInput}/>
            </div>
        </div>
        
    )
}

export default Postuseraccount;