//rules for registration
const Validator = require('validator');
const isEmpty = require('./is-empty.js');

module.exports = function validateRegisterInput(data) {
    let errors = {};
    
    //in order for it the possiblity of an empty string to be returned do the following:
    data.name = !isEmpty(data.name) ? data.name : ""; //if empty it will be data.name otherwise it will return an empty string
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    data.password2 = !isEmpty(data.password2) ? data.password2 : ""; //password2 is confirm password
    
    if(!Validator.isLength(data.name, {min: 2, max: 30})){
        errors.name = "Name must be between 2 and 30 characters";
        
    }
    
    //so that name is not empty
    if(Validator.isEmpty(data.name)) {
        errors.name = 'Name field is required'; 
    }
    
    if(Validator.isEmpty(data.email)) {
        errors.email = 'Email field is required';
    }
    
    if(!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid'; 
    }
    
    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required'; 
    }
    
    if(!Validator.isLength(data.password, {min: 6, max: 30})) {
        errors.password = 'Password must be at least 6 characters'; 
    }
    
    if(Validator.isEmpty(data.password2)) {
        errors.password2 = 'Confirm Password field is required'; 
    }
    if(!Validator.equals(data.password, data.password2)) {
        errors.password2 = 'Passwords must match'; 
    }
    return {
        errors,
        isValid: isEmpty(errors)
    }
}