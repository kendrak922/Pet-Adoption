import './contact.css';
import React, {Component} from "react";


class ContactForm extends Component{
render(){
 return(
    <div>
    <h1 className="contactHead">Contact Us</h1>
    <form>
        <label for="name">Name</label>
        <input id="name" name="name" type="text"></input>
        <br></br>
        <label for="email">Email</label>
        <input id="email" name="email" type="email"></input>
        <br></br>
        <label for="phone">Phone</label>
        <input id="phone" name="phone" type="tel" pattern="[0-9]"></input>
        <br></br>
        <label for="message">Message</label>
        <br></br>
        <textarea id="message" type="textarea">Enter Message Here</textarea>
        <br></br>
    </form>
</div>
 );
}
}

export default ContactForm;