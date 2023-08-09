import React, { useState } from "react";
import Result from "./Result.jsx";
const Search = () =>
{
    const[img,setImg] = useState("");
    const inputEvent = (event) =>{
        const data = event.target.value;
        console.log(data);
        setImg(event.target.value);
    }
    return(
        <>
           <div className="Serchbar">
           <input type="text" placeholder="Search Anything" 
            value={img}
            onChange={inputEvent}
           />
        
           </div>
           <div className="photos">
          {img === "" ? null : <Result name={img} />} 
           </div>
          

          
          
        </>
    );
};
export default Search;