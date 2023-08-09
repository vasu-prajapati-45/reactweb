import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
const Component = (props)  =>{
return(
    <>
    <section id="header" className="d-flex align-items-center  ">
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
              
                    <div className="col-md-6 my-auto  pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1 >
                            {props.name}
                            <br />
                            <strong className="brand-name">Prajapti Vashishtha</strong>
                        </h1>
                        <h4 className="my-auto">
                            We are the team of talented sdevloper making websides
                        </h4>
                        <div className="mt-3">
                            <NavLink to={props.visit} type="button" class="btn btn-outline-primary">
                           {props.btname}
                            </NavLink>
                        </div>
                    </div>
                    <div className=" d-flex justify-content-center flex-column my-5 col-lg-6 order-1 order-lg-2 header-img">
                        <img src={props.imgsrc}
                        className="img-fluid animated-image" alt="home img"></img>
                    </div>
                    </div>
                </div>
            </div>
        </div>
       
    </section>
    </>
);
};

export default Component;