
const Validator = require('validator');
const isEmpty = require('./is-empty.js');

module.exports = function validateEducationInput(data) {
    let errors = {};
    
    //in order for it the possiblity of an empty string to be returned do the following:
    data.school = !isEmpty(data.school) ? data.school : "";
    data.degree = !isEmpty(data.degree) ? data.degree : "";
    data.fieldOfStudy = !isEmpty(data.fieldOfStudy) ? data.fieldOfStudy : "";
    data.from = !isEmpty(data.from) ? data.from : "";
    
    
    if(Validator.isEmpty(data.school)) {
        errors.school = 'School field is required';
    }
    if(Validator.isEmpty(data.degree)) {
        errors.degree = 'Degree field is required';
    }
    if(Validator.isEmpty(data.fieldOfStudy)) {
        errors.fieldOfStudy = 'Field Of Study is required';
    }
    if(Validator.isEmpty(data.from)) {
        errors.from = 'From date field is required';
    }


    return {
        errors,
        isValid: isEmpty(errors)
    }
}