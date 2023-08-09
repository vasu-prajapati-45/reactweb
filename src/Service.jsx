import React from "react";
import Card2 from "./Card2.jsx"
import Sdata from "./sdata.jsx";
const service = ()  =>{
return(
    <>
<div className="my-5">
    <h1 className="text-center">Our Services</h1>
        </div>
     <div className="container-fluid mb-5">
     <div className="row">
     <div className="col-10 mx-auto">
     <div className="row gy-5">
        {
            Sdata.map((val,ind) =>{
                return <Card2 key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                />
            })
        }
     
 </div>
 </div> </div>
           </div>
       


</>
);
};

export default service;