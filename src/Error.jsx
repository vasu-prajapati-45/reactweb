import React from "react";
import { NavLink } from "react-router-dom";



const Error = () => {
    return(
    <>
    <h1>404 Error page</h1>
    <p>Page is not Found</p>
    <NavLink exact activeClassName="active_class"  to="/">About</NavLink>
            
    </>
    );
};

export default Error;