import React from "react";
import sdata from "./sdata.jsx";
import Card from "./Cards.jsx";

const Amazon= () =>{
return(
    <Card
    key={sdata[3].id}
    imgsrc={sdata[3].imgsrc}
    title = {sdata[3].title}
    mname = {sdata[3].mname}
    link = {sdata[3].link}
    />
);
}

export default Amazon;