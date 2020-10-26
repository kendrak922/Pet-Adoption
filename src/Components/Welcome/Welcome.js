import './welcome.scss';
import React, { Component } from "react";
import Mac from './Mac.JPG';
import Circe from './Circe.JPG'
import Juniper from './Juniper.jpg'



class Welcome extends Component {
    render() {
        return (
            <div className="flex-container">
                {/* <h1 className="title">Animal Rescue</h1> */}
                <img src={Mac} className="tabby welcome-item" alt="Tabby cat" />
                <h1 className="title">Animal Rescue</h1>
                <img src={Circe} className="calico welcome-item" alt="Calico Cat" />
                <div className="text-right welcome-item">
                    <h1> Animal Rescue </h1>
                    <p>Welcome to Pet Rescue! Let us introduce you to your new best friend. We believe life is better spent with pets. </p>
                    <h2> We Love Animals!!</h2>
                </div>
                <div className="steps">
                    <div className="stepOne process">
                        <p className="number">1</p>
                        <p>Head over to our "Adoptable Animal's" page to see if there's a pet that you think could be a good fit. </p>
                    </div>
                    <div className="stepTwo process">
                        <p className="number">2</p>
                        <p>Contact us and we will connect you with the foster to set up a Meet-and-Greet.</p>
                    </div>
                    <div className="stepThree process">
                        <p className="number">3</p>
                        <p>Once you have fallen in love just fill out an adoption form. We will reach out to you once you've been approved to let you know when you can take home your new family member.</p>
                    </div>
                </div>
                <img src={Juniper} alt='yellow dog'></img>
            </div>
        );
    }
}
export default Welcome;