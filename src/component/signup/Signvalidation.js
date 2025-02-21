// Signvalidation.js
function Validation(values) {
    let errors = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

    if (!values.name) {
        errors.name = "Name should not be empty";
    }

    if (!values.email) {
        errors.email = "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Invalid email format";
    }

    if (!values.password) {
        errors.password = "Password should not be empty";
    } else if (!passwordPattern.test(values.password)) {
        errors.password = "Password should be at least 8 characters long and contain at least one digit, one lowercase letter, and one uppercase letter";
    }

    return errors;
}

export default Validation;


  
  
  
  
