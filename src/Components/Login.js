import React, { Component } from 'react';
import {NavLink, Redirect} from 'react-router-dom'
import Register from './Register'
import '.././App.css'
class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      email:"",
      password:"",
      LogIn:false,
      UsrID:-1
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    var self = this;
    var temp=false;
    fetch('/users',{
   method: 'POST',
   body: JSON.stringify({
     email: self.state.email,
     password:self.state.password
   }),
   headers: {"Content-Type": "application/json"}
 })
 .then(function(response){
   return response.json()
 }).then(function(body){
   console.log(body);
   if(body.login)
    self.setState({LogIn:true,UsrID:body.ID});
 });


//users[0].username
//console.log('s');
//fetch('/users')
  //  .then(res    =>res.json())
    //.then(users  => this.setState({ email:users[0].username}));
  //  .then(users  => console.log(users[0]));
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  //handleRedirecting(e){
    //return <Route path='/register' component={Register}/>
//  }
//this.props.history.push("/new/url")
  render() {

    const redirectToReferrer = this.state.LogIn;
    if (redirectToReferrer){
      //console.log("going to validation")
      const a=this.state.UsrID
      console.log("sending this id to the next page welcome "+a)
      return <Redirect to={{pathname: '/welcome',state: { LogIn: true,UsrID: a}}} />;
    }

    return (

      <div className="container h-100">
      <div className="row h-100 justify-content-center align-items-center">
      <div className="col-md-4" >
      &nbsp;
      </div>
      <div className="col-md-4 bg-white pt-4 pb-4 shadow border border-dark rounded">
      <div className="text-center pb-2">
        <p className="display-4"> Sign in </p>
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
          <label htmlFor="InputPassword">Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            className="form-control"
            id="InputPassword"
            placeholder="Password"
            autoComplete="current-password"
            />
          </div>
          <div className="container">
          <div className="row">
            <div className="col-md-6 text-md-left">
              <button type="submit" value="submit" className="btn btn-primary"  >Login</button>
            </div>
            <div className="col-md-6 text-md-right">

            <NavLink
              to="/register"
              className="btn btn-primary"
              >Register</NavLink>
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

export default Login;
