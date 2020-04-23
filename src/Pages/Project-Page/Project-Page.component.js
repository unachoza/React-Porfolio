import React, { Component } from 'react';
import ProjectCard from '../../Components/ProjectCard/Project-Card.component';
import { PROJECTS } from './project-data';
import './Projects.styles.css';

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECTS,
    };
  }
  componentDidMount = () => (
    <div>
      {this.state.projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
  render() {
    const mapProjects = () => {
      console.log(this.state);
      return this.state.projects.map((project) => <ProjectCard key={project.id} project={project} />);
    };

    return <div className="project-page__container">{mapProjects(this.state)}</div>;
  }
}
export default ProjectPage;
