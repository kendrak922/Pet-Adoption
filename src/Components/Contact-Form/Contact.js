import './contact.css';
import React from "react";
import useForm from "../../useForm";
import validateForm from "./validateForm"


const Contact = () => {

const { handleChange, handleSubmit, values, errors} = useForm(submit, validateForm)

function submit(){
    console.log("Submitted Succesfully")
    console.log(values)
}

 return(
    <div>
    <h1 className="contactHead">Contact Us</h1>
    <form onSubmit={handleSubmit} noValidate>
        <label>Name
        <br></br>
        <input values={values.name} onChange={handleChange}name="name" type="text"></input>
        {errors.name && <p>{errors.name}</p>}
        </label>
        <br></br>
        <label>Email
        <br></br>
        <input values={values.email} onChange={handleChange} name="email" type="email">
        </input>
        {errors.email && <p>{errors.email}</p>}
        </label>
        <br></br>
        <label>Phone
        <br></br>
        <input values={values.phone} onChange={handleChange} name="phone" type="tel"></input>
        {errors.phone && <p>{errors.phone}</p>}
        </label>
        <br></br>
        <label>Message
        <br></br>
        <textarea values={values.message} onChange={handleChange} name="message" type="textarea">Enter Message Here</textarea>
        </label>
        <br></br>
        <input type="submit" value="submit" className="submit"></input> 
    </form>
</div>
 );
}

export default Contact;