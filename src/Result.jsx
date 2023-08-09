import React from "react";

const Result = (props) =>{
const vas = `https://source.unsplash.com/300x300/?${props.name}`
return(
    <>
        <img src={vas}  alt="search" />
    </>
);
};
export default Result;