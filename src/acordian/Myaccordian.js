import React, { useState } from "react";

const Myaccordian = ({question,answer}) => {
    const [show,setshow]=useState(false);
    return(
        <>
            <div className="main-heading">
                <p className="start">+</p>
                <h3 className="start"> {question}</h3>
            </div> 
            {show &&   <p>{answer}</p>}   
        </>
    )
}

export default Myaccordian;