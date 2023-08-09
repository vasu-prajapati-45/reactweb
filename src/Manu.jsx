import React from "react";
import { NavLink } from "react-router-dom";


const Manu = () => {
    return (
            <>
            <div className="manu_style">
            <NavLink exact activeClassName="active_class" to="/">
            Home 
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/">
            About Us
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/services">
                Services
            </NavLink>
            <NavLink exact activeClassName="active_class" to="/conte">
                Contact Us
            </NavLink>

            <br />
            </div>
            </>
    );
};

export default Manu;