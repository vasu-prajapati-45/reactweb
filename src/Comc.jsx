import React from "react";
import { Tname , lname } from "./App.jsx";

const Comc = () => {
    return(
        <Tname.Consumer>{(Jname) => 
        {
            return(
                <lname.Consumer>
                    { (nname) =>{
                        return(
                            <h1>
                                 My Name is {Jname } {nname}
                            </h1>
                        );
                    } }
                </lname.Consumer>
            );
            }}

        </Tname.Consumer>
    );
};
export default Comc;