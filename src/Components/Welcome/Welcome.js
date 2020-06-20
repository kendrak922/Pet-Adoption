import './welcome.css';
import React, { Component } from "react";
import Mac from './Mac.JPG';



class Welcome extends Component {
    render() {
        return (
            <div className="container">
                <img src={Mac} className="tabby" alt="tabbycat" />
                <div className="right">
                    <h1>Clyde's Pet Rescue</h1>
                    <p>Welcome to Clyde's Pet Rescue! Let us introduce you to your new best friend. We believe life is better spent with pets. </p>
                    <h2> We Love Animals!!</h2>
                </div>
                <h2>Adopt don't shop</h2>
            </div>
        );
    }
}
export default Welcome;