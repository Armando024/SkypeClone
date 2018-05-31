import React, { Component } from 'react';

class Project1 extends Component {
  render() {
    return (

      <li className="Project">
        {this.props.project.title}-{this.props.project.category}
      </li>
    );
  }
}

export default Project1;
