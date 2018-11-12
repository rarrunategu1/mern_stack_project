//login rules
const Validator = require('validator');
const isEmpty = require('./is-empty.js');

module.exports = function validateLoginInput(data) {
    let errors = {};
    
    //in order for it the possiblity of an empty string to be returned do the following:
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
   
     if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'; 
    }
    
    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }
    
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'; 
    }
    

    return {
        errors,
        isValid: isEmpty(errors)
    }
}