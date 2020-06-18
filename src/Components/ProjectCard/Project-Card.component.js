import React from 'react';
import './Project-Card.styles.css';

const ProjectCard = ({ project }) => {
  console.log('me', project);
  if (project) {
    const { projectLink, imageLinks, name, description, githubLink } = project;
    return (
      <div className="project-card__container">
        <a href={projectLink} target="_blank" rel="noopener noreferrer">
          {imageLinks.length > 1 ? (
            <div className="double-img" id="cf">
              <img className="bottom project-img" src={imageLinks[0]} alt="project preview" />

              <img className="top project-img" src={imageLinks[1]} alt="project preview" />
            </div>
          ) : (
            <img className="top project-img" src={imageLinks[0]} alt="project preview" />
          )}
        </a>
        <br />
        <h2>{name}</h2>
        <p>{description}</p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          {' '}
          <div className="project-footer">
            <div className="button-code">
              <div className="project-card__code-link">See My Code</div>
            </div>
          </div>
        </a>
      </div>
    );
  }
  return <div></div>;
};

export default ProjectCard;

// Project Image
// Project Title
// Project Description
// Project Code link

/* <a href="http://susans.surge.sh/" target="_blank">
        <div className="double-img" id="cf">
          <img
            className="bottom project-img"
            src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1553110722/Screen_Shot_2019-03-20_at_3.38.20_PM.png" alt="project preview"
          />

          <img
            className="top project-img"
            src="https://res.cloudinary.com/dh41vh9dx/image/upload/c_scale,h_140,w_230/v1546220914/susan-sarandon.jpg" alt="project preview"
          />
        </div>
      </a>
      <br /> */
