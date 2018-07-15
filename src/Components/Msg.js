import React, { Component } from 'react';
import '.././App.css'


class Msg extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
    this.state={
      firstname:"",
      UsrID:-1,
    };
  }

componentDidMount(){
  console.log("in Msg with props "+this.props.id);
  fetch("/users/"+this.props.id)
    .then(res    =>res.json())
    .then(users  =>this.setState({ firstname:users[0].firstname,
                                   UsrID:users[0].UsrID
                                 }));
                               
}


render(){
  return(<div>
        <p>{this.state.firstname}</p>
        </div>);
}


}

export default Msg;
