import React from 'react';
import './Project-Card.styles.css'

const ProjectCard = ({ imgUrl }) => {
  return (
    <div className="project-card">
      <a href="http://susans.surge.sh/" target="_blank">
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
      <br />
      Project Image Project Title Project Description Project Code link
    </div>
  );
};

export default ProjectCard;
