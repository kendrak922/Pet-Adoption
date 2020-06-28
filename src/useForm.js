import {useState, useEffect} from "react";

const useForm = (callback, validateForm) => {
    const [values, setValues] =  useState ({name:"",phone:"",email:"", message:"",});
    const [errors, setErrors] =  useState ({});
    const[isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = event => {
    const {name, value} = event.target;
        setValues({
            ...values,
            [name]:value
        }); 
    };
    const handleSubmit = event => {
    event.preventDefault();
    event.target.reset();
    //handling errors
setErrors(validateForm(values));
setIsSubmitting(true)
    };
useEffect(() => {
    ///check to see if there are no errors
    ///call callback
    if(Object.keys(errors).length === 0 && isSubmitting){
        callback()
    }
}, [errors])    

   return{
       handleChange,
       handleSubmit,
       values,
       errors
   };
};

export default useForm;