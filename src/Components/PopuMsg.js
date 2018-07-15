import React, { Component } from 'react';
import {NavLink, Redirect} from 'react-router-dom'
import Register from './Register'
import LeftCenter from './LeftCenter'
import Msg from './Msg'
import '.././App.css'




class PopuMsg extends Component {
  constructor(props){
    super(props);
    console.log("props for PopuMsg");
    console.log(props);
    this.state={
      temp:"",
      Msg:true
    };
    this.showMsg=this.showMsg.bind(this);
    this.showContact=this.showContact.bind(this);
  }

showMsg(e){
  this.setState({Msg:true});
}
showContact(e){
this.setState({Msg:false});}

render(){
  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <button type="button" onClick={this.showMsg}  className="btn btn-primary">
              Messages
          </button>
        </div>
        <div className="col-md-6">
          <button type="button" onClick={this.showContact} className="btn btn-primary">
              Contacts
          </button>
        </div>
        <div className="col-md-12">
            <div id="uni" className="card mt-1">
                <LeftCenter value={this.state.Msg} id={this.props.value} />
            </div>
        </div>
      </div>
    </div>

);}}

export default PopuMsg;
