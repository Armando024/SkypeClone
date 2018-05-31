import React, { Component } from 'react';
import Projects from './Components/Projects'
import Login from './Components/Login'
import './App.css';

class App extends Component {
constructor(){
  super();
  this.state={
    projects: []
  }
}

componentWillMount(){
  this.setState({ projects:[
    {
      title:'Login/register form',
      category:'begin'
    },
    {
      title:'Welcome Screen',
      category:'Welcome'
    },
    {
      title:'Search',
      category:'contacts'
    }

]});
  }
  render() {

    //  /* <Projects projects={this.state.projects} /> */
    return (
      <div className="App">
        <Login/>

      </div>
    );
  }
}

export default App;
