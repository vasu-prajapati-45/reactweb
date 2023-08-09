import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import service from './Service.jsx';
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from "./Contact.jsx"
import "./index.css";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
const App = () => {
   return (
      <> 
     <Router>
     <Navbar />
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/contact" component={Contact} />
         <Route exact path="/service" component={service} />
         <Footer />
       </Switch>
     </Router>
     <Footer />
     </>
   );
 };

 export default App;
