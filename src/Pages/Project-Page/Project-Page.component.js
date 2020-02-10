import React, { Component } from 'react';
import { PROJECTS } from './project-data';
import ProjectCard from '../../Components/ProjectCard/Project-Card.component';
import Homepage from '../Homepage/Homepage.component';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }
  // componentDidMount(projects) {
  // projects.map(project => (
  //         <ProjectCard key={projects.id} project={project} />
  //       ))
  // }
  render() {
    const { projects } = this.state;
    if (projects.length > 0) {
    projects.map(project => (
          <ProjectCard key={projects.id} project={project} />
        ))}
     
    return (
      <div className="card">
        {projects.map(project => (
          <ProjectCard key={projects.id} project={project} />
        ))}
        Go
      </div>
    );
  }
}
export default ProjectPage;
