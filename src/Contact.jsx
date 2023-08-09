import React, { useState } from "react";
import Footer from "./Footer.jsx";
const Contact = () => {
    const [data,setData] = useState({
        fullname:"",
        phone :"",
        Email :"",
        msg :""
    
    });
    
const InputEvent = (event) =>{
    const { name, value } = event.target;

    setData((preVal) => {
        return{
            ...preVal,
            [name]: value,
        };
    });
};

const FromSubmit = (e) => {
    e.preventDefault();
    alert(`My name is ${data.fullname}. My Mobile number is ${data.phone}. my email ${data.Email}. my msg ${data.msg}`)
};

    return(

                 <>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div" onSubmit={FromSubmit}>
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={FromSubmit}>
                <div class="mb-3">
                 <label 
                 for="exampleFormControlInput1" 
                 class="form-label">
                 Full Name
                 </label>
                 <input 
                 type="text" 
                 class="form-control" 
                 id="exampleFormControlInput1"
                 name="fullname"
                 value={data.fullname} 
                 onChange={InputEvent}
                 placeholder="Enter your name" />
                 
                 <label 
                 for="exampleFormControlInput1" 
                 class="form-label">
                Phone 
                 </label>
                 <input 
                 type="number" 
                 class="form-control" 
                 id="exampleFormControlInput1" 
                 name="phone"
                 value={data.phone}
                 onChange={InputEvent}
                 placeholder=" Phone No" />
                
                 <label 
                 for="exampleFormControlInput1" 
                 class="form-label">
                 Email address
                 </label>
                 <input 
                 type="email" 
                 class="form-control" 
                 id="exampleFormControlInput1"
                 name="Email"
                 value={data.Email} 
                 onChange={InputEvent}
                 placeholder="name@example.com" />
                 </div>
                
<div class="mb-3">
  <label 
  for="exampleFormControlTextarea1" 
  class="form-label">
  Message
  </label>
  <textarea 
  class="form-control" 
  id="exampleFormControlTextarea1" 
  name="msg"
                 value={data.msg}
                 onChange={InputEvent}
  rows="3">
  </textarea>
  </div>
  <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
  </form>
</div>
        
                  
    </div>
    </div>
        </>
    );
};

export default Contact;