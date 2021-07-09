import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
   return <nav class="navbar navbar-expand-lg navbar-light bg-light container">   
        <h4><Link to="/">Home</Link></h4>      
       <h4><Link to="/visitors">Visitors</Link></h4>                 
       <h4><Link to="/appointment">Make Appointment</Link></h4>           
 </nav>  
       
}

export default Navbar;