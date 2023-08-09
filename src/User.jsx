import React from "react";
import { useParams , useLocation , useHistory} from "react-router-dom";


const User = () => {
  // Access the URL parameter "Fname" using useParams()
  const { Fname , lname } = useParams();
  const location = useLocation();
  const history = useHistory();
  console.log(history);

  console.log(location);

  return (
    <div>
      <h1>Hello, I am {Fname} {lname}!</h1>
      <p>My current location is {location.pathname}</p>
     <button onClick={ () => history.goBack()}>Click Me</button>
    </div>
  );
};

export default User;