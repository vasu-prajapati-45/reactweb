import React from "react";
import sdata from "./sdata.jsx";
import Card from "./Cards.jsx";

const Netflix = () =>{
return(
    <Card
    key={sdata[1].id}
    imgsrc={sdata[1].imgsrc}
    title = {sdata[1].title}
    mname = {sdata[1].mname}
    link = {sdata[1].link}
    />
);
}

export default Netflix;