import React, { Component } from 'react';
import Msg from './Msg'
import '.././App.css'


class LeftCenter extends Component {


render(){
    //
  if(this.props.value)
  return(<div>
        <p>id in LeftCenter{this.props.id}</p>
        <Msg msg={"hello"} id={this.props.id}/>
        </div>);
  else{
    return(<div>
            Contacts
          </div>);

  }
}


}

export default LeftCenter;
