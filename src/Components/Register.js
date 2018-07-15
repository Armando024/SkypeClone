import React, { Component } from 'react';
import { NavLink  } from 'react-router-dom'
import '.././App.css'
class Register extends Component {
  constructor(){
    super();
    this.state={
      email:"",
      firstname:"",
      lastname:"",
      password:"",
      birthday:""
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleSubmit(e){
    console.log(this.state.email);
    console.log(this.state.password);
    e.preventDefault();
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-4" >
        &nbsp;
        </div>
          <div className="col-md-4  bg-white pt-4 pb-4 shadow border border-dark rounded">
          <div className="text-center pb-2">
            <p className="display-4"> Create Account</p>
            </div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="InputEmail">Email address:</label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              className="form-control"
              id="InputEmail"
              placeholder="Enter email"
              autoComplete="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Inputfirstname">First Name:</label>
            <input
              type="text"
              name="firstname"
              value={this.state.firstname}
              onChange={this.handleChange}
              className="form-control"
              id="Inputfirstname"
              placeholder="First Name"
              autoComplete="given-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Inputlastname">Last Name:</label>
            <input
              type="text"
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleChange}
              className="form-control"
              id="Inputlastname"
              placeholder="Last Name"
              autoComplete="family-name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="InputPassword">Password:</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              className="form-control"
              id="InputPassword"
              placeholder="Password"
              autoComplete="new-password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="Inputbirthday">Birtday:</label>
            <input
              type="text"
              name="birthday"
              value={this.state.birthday}
              onChange={this.handleChange}
              className="form-control"
              id="Inputbirthday"
              placeholder="1955-06-08"
              autoComplete="bday"
            />
          </div>
          <div className="container">
          <div className="row">
            <div className="col-md-3 text-md-left">
              <button type="submit" value="submit" className="btn btn-primary"  >Submit</button>
            </div>
            <div className="col-md-9 text-md-left pr-0">
            <p className="lead smalltext"> Already have an account? Click&nbsp;
            <NavLink
              exact
              to="/"
              >here</NavLink>

            </p>
            </div>
          </div>

          </div>

        </form>
        </div>
        <div className="col-md-4" >
        &nbsp;
        </div>
        </div>
      </div>


    );
  }
}

export default Register
