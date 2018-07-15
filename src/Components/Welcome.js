import React, { Component } from 'react';
import {NavLink, Redirect} from 'react-router-dom'
import Register from './Register'
import PopuMsg from './PopuMsg'
import '.././App.css'
class Welcome extends Component {
  constructor(props){
    super(props);
    console.log("props vals for welcome");
    console.log(props);
    this.state={
      firstname:"",
      lastname:"",
      email:"",
      LogIn:false,
      UsrID:-1
    };

    //this.handleSubmit=this.handleSubmit.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.handleLogOut=this.handleLogOut.bind(this);
  }

//  handleSubmit(e){
  //  e.preventDefault();

 //});
 componentWillUnmount(){

 }

 //const data = {foo:1, bar:2};

//fetch(`https://api.parse.com/1/users?foo=${encodeURIComponent(data.foo)}&bar=${encodeURIComponent(data.bar)}`, {
//   method: "GET",
//   headers: headers,
//   body:body
// })
 componentDidMount(){
   if(!(typeof this.props.location.state === "undefined")  && this.props.location.state.LogIn ){
     console.log("in welcome with id "+this.props.location.state.UsrID);
     console.log(this.props.location.state.LogIn);
   fetch("/users/"+this.props.location.state.UsrID)
     .then(res    =>res.json())
     .then(users  =>this.setState({ firstname:users[0].firstname,
                                    lastname:users[0].lastname,
                                    email:users[0].email,
                                    UsrID:users[0].UsrID
                                  }));

  }
}

  handleChange(e){

    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleLogOut(e){
    this.setState({
      firstname:"",
      lastname:"",
      email:"",
      LogIn:false,
      UsrID:-1,
    });
    this.props.location.state.LogIn=false;
  }

render() {

  if((typeof this.props.location.state === "undefined") || !this.props.location.state.LogIn){
    return ( <Redirect to={{pathname: '/',state: { LogIn: false }}} /> );
  }

  return (
    <div className="container">
      <div className="row">

        <div className="col-md-12 text-center">
            <p className="display-4"> Welcome {this.state.firstname} {this.state.lastname}</p>
        </div>
        <div className="col-md-12 text-right">
            <button className="btn btn-secondary" onClick={this.handleLogOut}>LogOut </button>
        </div>
        <div className="col-md-12">
        &nbsp;
        </div>
        <div className="col-md-12">
        &nbsp;
        </div>
        <div className="col-md-12">
        &nbsp;
        </div>
        <div className="col-md-3 h-100 shadow p-3 mb-5 bg-white rounded">
            <PopuMsg value={this.props.location.state.UsrID} />
        </div>
        <div className="col-md-9 h-100 bg-white rounded shadow">
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
            <div> hi</div>
        </div>
      </div>
    </div>


  );
}
}

export default Welcome;
