export default function validate(values){
    let errors = {}
    if(!values.email){
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)){
        errors.email ="Email Address is required";
    }
    if(!values.name){
    } else if (values.name.length < 0 ){
        errors.password = "Please add your name";
    }
    if(!values.phone){
    } else if (/^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/.test(values.email)){
        errors.phone ="Valid phone number is required";
    }

    return errors;
}