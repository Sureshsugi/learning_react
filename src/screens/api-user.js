import React, {useState} from "react";
import axios from "axios";

const Apiuser = () => {

   const [allusers, updatedallusers] = useState ([]);

   const loadapiuser = () => {
     const url ="http://localhost:5000/api/user/list"

     
     


   }
    return (
        <div>
            <h2> wellcome api </h2>
            <button> click here</button>
        </div>
         
    )
}

export default Apiuser;