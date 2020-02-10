import React, { Component } from 'react';
import ProjectCard from '../../Components/ProjectCard/Project-Card.component';

class Projects extends Component {
  moveto = () => {};

  render() {
    return (
      <div>
        <h1>Project List</h1>
        <ProjectCard />
      </div>
    );
  }
}

export default Projects;
