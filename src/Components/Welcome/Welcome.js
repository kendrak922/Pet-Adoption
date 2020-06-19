import './welcome.css';
import React, {Component} from "react";
import Mac from './Mac.JPG';



class Welcome extends Component{
  render(){
   return (
<div className="container"> 
    <img src={Mac} className ="tabby"alt="tabbycat"/>
    <p className="descritption">Welcome to Clyde's Pet Rescue! Let us introduce you to your new best friend. We believe life is better spent with pets. </p>
</div>
);
}
}
export default Welcome;