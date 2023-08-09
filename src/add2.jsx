import React from "react";
import Card from "./Hadling.jsx";
import sdata from "./sdata.jsx";


const add2 = () => (
    <>
<h1 className="heading_style">list of top 5 netflix series in 2023</h1>
{sdata.map((val,index) => {
    console.log(index);
    return(
        <Card
    imgsrc={val.imgsrc}
  title={val.title}
  mname={val.mname} 
 link={val.link}
 />
    );
    })}
</>
);

export default add2;