import React from "react";
import { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Button from '@material-ui/core/Button';
import Clock from "react-digital-clock";

const ToDoLists = () => {

    const [num,setNum] = useState(0);

    const incNUM = () => {
     
            setNum(num+1)
      
    
    }

    const decNUM = () => {
        if(num > 0 ){
            setNum(num-1)
        }else{
            alert('not a decriment')
                setNum(0)
        }
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="btn_div">
                        <Button onClick={incNUM} className="btn_green">
                            <AddIcon />
                           
                        </Button>
                        
                        <Button onClick={decNUM} className="btn_red"><RemoveIcon />
                       
                        </Button>
                    </div>
                </div>
            </div>
            <Clock />
        </>
    )

};

export default ToDoLists;