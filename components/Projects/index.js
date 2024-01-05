import React, { useState, useEffect } from 'react';
// import Header from '../Header'; 
import prjct1 from '../Images/prjct-1.png';
import prjct2 from '../Images/prjct-2.png';
import prjct3 from '../Images/prjct-3.png';
import './index.css'

function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/api/projects')
      .then((response) => response.json())
      .then((data) => {
        setProjects(data); // Set the fetched projects in state
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []);

  return (
    <div className='prjct-container'>
        <h1 className='prjct-title'>Projects</h1>
        <hr className='line'/>
        <div className='prjct-card'>
        <div className='txt-container'>
        <h2>Project Name</h2>
        <p>I created this personal project in order
         to show how to create an interface in Figma using a
         portfolio as an example.</p>
         <button className='prjct-btn'>View Project</button>
         </div>
            <img src={prjct1} alt='project-1' className='prjct-img'/>
        </div>
        <div className='prjct-card'>
        <img src={prjct2} alt='project-2' className='prjct-img2'/>
        <div className='txt-container'>
        <h2>Project Name</h2>
        <p>What was your role, your deliverables, if the project was personal, freelancing.</p>
         <button className='prjct-btn'>View Project</button>
         </div>
        </div>
        <div className='prjct-card'>
        <div className='txt-container'>
        <h2>Project Name</h2>
        <p>I created this personal project in order
         to show how to create an interface in Figma using a
         portfolio as an example.</p>
         <button className='prjct-btn'>View Project</button>
         </div>
            <img src={prjct3} alt='project-1' className='prjct-img'/>
        </div>
        {projects.map((project, index) => (
          <div key={index} className='prjct-card'>
            <div className='txt-container'>
              <h2>{project.ProjectName}</h2>
              <a href={project.ProjectLink} target='_blank' rel='noopener noreferrer'>
              {project.ProjectLink}
            </a>
              <p>{project.description}</p>
              </div>
              </div>
              ))}
        {/*<Header/>*/}
        </div>
        
  );
}

export default Projects;
