
const Validator = require('validator');
const isEmpty = require('./is-empty.js');

module.exports = function validateExperienceInput(data) {
    let errors = {};
    
    //in order for it the possiblity of an empty string to be returned do the following:
    data.title = !isEmpty(data.title) ? data.title : "";
    data.company = !isEmpty(data.company) ? data.company : "";
    data.from = !isEmpty(data.from) ? data.from : "";
    
    
    if(Validator.isEmpty(data.title)) {
        errors.title = 'Job title field is required';
    }
    if(Validator.isEmpty(data.company)) {
        errors.company = 'Company field is required';
    }
    if(Validator.isEmpty(data.from)) {
        errors.from = 'from date field is required';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}