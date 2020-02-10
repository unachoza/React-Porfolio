import React from 'react';
import './Project-Card.styles.css';

const ProjectCard = ({ project }) => {
  console.log('change', project);
  // console.log('here at card', project.name);
  return <div>ptime</div>
}
//   return (
//     <div>
//       <a href={project.projectLink} target="_blank">
//         <div className="double-img" id="cf">
//           <img
//             className="bottom project-img"
//             src={project.imageLinks[0]} alt="project preview"
//           />

//           {/* <img
//             className="top project-img"
//             src="https://res.cloudinary.com/dh41vh9dx/image/upload/c_scale,h_140,w_230/v1546220914/susan-sarandon.jpg" alt="project preview"
//           /> */}
//         </div>
//       </a>
//       <br />
//       <h2>{project.name}</h2>
//                         <p>{project.description}</p>
//                         <a href={project.githubLink}
//                             target="_blank"> <h3>See My Code </h3></a>
//       <div className="project-card">hey</div>)
//     </div>
//   )
// };

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
