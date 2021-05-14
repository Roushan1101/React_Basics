import React from 'react';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Nav.css'
function Nav(){
    return <nav className="navbar bg-dark container">
   <h4><Link  className="link" to="/">Home</Link></h4>
   <h4><Link className="link" to="/next">Next</Link></h4>
   <h4><Link className="link" to="/handle">Handle</Link></h4>
    </nav>
}
export default Nav;