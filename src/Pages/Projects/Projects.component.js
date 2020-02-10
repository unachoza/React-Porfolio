import React, { Component } from 'react';
import CustomButton from '../../Components/CustomButton/Custom-Button.component';

class Projects extends Component {
  moveto = () => { };
  
  
  
  
  render() {
    return (
      <div className="page">
      <CustomButton title="Projects"/>
      <CustomButton title="About Me"/>
      <CustomButton title="Contact"/>
      </div>
    );
  }
}

export default Projects;
