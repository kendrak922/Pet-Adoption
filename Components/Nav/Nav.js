import './nav.css';
import React, {Component} from "react";
import { Link } from "react-router-dom";
import logo from './logo.png';


class Nav extends Component{
  render(){
   return (
<div className="header"> 
  <div className="container">   
  <nav>
  <img src={logo} alt="Logo" className="logo"/>
    <ul>
      <li className="nav-item"><Link to="/">About</Link></li>
        <li className="nav-item"><Link to="/adopt">Adoptable Cats</Link></li>
        <li className="nav-item"><Link to="/form">Apply for Adoption</Link></li> 
      <li className="nav-item"><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
  </div>
  </div>

);
}
}
export default Nav;