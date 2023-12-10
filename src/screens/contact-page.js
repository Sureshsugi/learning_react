import React from "react";
import{NavLink} from "react-router-dom";

const ContactScreen = () => {
    return(
        <div>
            <h1>Contact page</h1>
            <NavLink to="login"> Go to LoginScreen</NavLink>
        </div>
    )
}

export default ContactScreen;