import React, { Component } from 'react';
import Project1 from './Project1'
class Projects extends Component {


  render() {
    let project0;
    if(this.props.projects){
    project0=this.props.projects.map(project => {
      //console.log(project);
      return (
        <Project1 key={project.title} project={project} />
      );
    });

    }


    return (
      <div className="Projects">
      My Projects

        {project0}

      </div>
    );
  }
}

export default Projects;
