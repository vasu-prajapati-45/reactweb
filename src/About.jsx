import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import Component from "./componet2.jsx";
const About= ()  =>{
return(
    <>
    <Component name='Welcome to About Page'
        imgsrc="https://dcubetech.in/images/web-development.gif"
        visit="/contact"
        btname="Contact Us"
    />
    </>
);
};

export default About;