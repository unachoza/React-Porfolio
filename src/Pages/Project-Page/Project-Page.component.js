import React, { Component } from 'react';
import ProjectCard from '../../Components/ProjectCard/Project-Card.component';
import {PROJECTS} from './project-data'

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects:PROJECTS
    }
  }
  componentDidMount() {
     console.log(this.state)
     return this.state.projects.map(project => <ProjectCard key={project.id} project={project} />)
  }
  render() {
    const mapProjects = () => {
      console.log(this.state)
     return this.state.projects.map(project => <ProjectCard key={project.id} project={project} />);
    }
   

    return <div>{mapProjects(this.state)}</div>;
  }
}
export default ProjectPage;
