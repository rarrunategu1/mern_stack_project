import React, { Component } from 'react';
import PropTypes from 'prop-types'; //to map any properties I have in my component
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux'; //to connect redux in a component
import { registerUser } from '../../actions/authActions';

class Register extends Component {
    constructor() { //to create component state
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
        
        this.onChange = this.onChange.bind(this); //binds "this" so that it can be used in the change event function
        this.onSubmit = this.onSubmit.bind(this);
    }
    //lifecycle method which will run when component receives new properties
    componentWillReceiveProps(nextProps) {
      //test for errors prop
      if(nextProps.errors) {
        this.setState({errors: nextProps.errors});
      }
    }
    
    onChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }
    onSubmit(event) {
        event.preventDefault();
        
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        
        this.props.registerUser(newUser, this.props.history);  //allows us to use to redirect from within
    }
    
    render() {
      //if there are errors, they'll be here
      const { errors } = this.state; //this destructuring is the same as const errors = this.state.errors;
      
        return(
          <div className="register">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Sign Up</h1>
                  <p className="lead text-center">Create your DevConnector account</p>
                  <form noValidate onSubmit={this.onSubmit}>
                   <div className="form-group">
                    <input 
                      type="text" 
                      className={classnames('form-control form-control-lg', { //form controls here are classnames that are always going to be used
                        'is-invalid': errors.name //this will only happen if there is an error with the name and it will make the outline red
                      })} 
                      placeholder="Name" 
                      name="name" 
                      value={this.state.name}
                      onChange={this.onChange}
                      required />
                      {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}  
                   </div>
                   <div className="form-group">
                    <input 
                      type="email" 
                      className={classnames('form-control form-control-lg', { //form controls here are classnames that are always going to be used
                        'is-invalid': errors.email //this will only happen if there is an error with the name and it will make the outline red
                      })} 
                      placeholder="Email Address" 
                      name="email"
                      value={this.state.email}
                      onChange={this.onChange}/>
                      {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}  
            
                      <small className="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                   </div>
                   <div className="form-group">
                    <input 
                      type="password" 
                      className={classnames('form-control form-control-lg', { //form controls here are classnames that are always going to be used
                        'is-invalid': errors.password //this will only happen if there is an error with the name and it will make the outline red
                      })}  
                      placeholder="Password" 
                      name="password"
                      value={this.state.password}
                      onChange={this.onChange}/>
                      {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}  
            
                   </div>
                   <div className="form-group">
                    <input 
                      type="password" 
                      className={classnames('form-control form-control-lg', { //form controls here are classnames that are always going to be used
                        'is-invalid': errors.password2 //this will only happen if there is an error with the name and it will make the outline red
                      })}  
                      placeholder="Confirm Password" 
                      name="password2"
                      value={this.state.password2}
                      onChange={this.onChange}/>
                      {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}  
            
                   </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
//mapping prop types
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

//to get the auth state in the component
const mapStateToProps = (state) => ({
  auth: state.auth, //this comes from the root reducer
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register)); //connect for redux