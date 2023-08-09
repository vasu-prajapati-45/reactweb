import React, { useState } from "react";
import { questions } from "./api.js";
import Myaccordian from "./Myaccordian.js"
import  "./accordion.css";


const Accodion = ()  => {

    const [Data,setDta] = useState(questions)
    return(
        <>
        <section className="main-div">
        <h1 className="ac">React Interview questions</h1>
                {
                    Data.map((curElem)=>{
                        const {id}=curElem
                        return<Myaccordian key={id}{...curElem}  />
                    }
                    )
                }
                </section>  
        </>
    )
}

export default Accodion;