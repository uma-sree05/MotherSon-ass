import React, { useState, useEffect } from 'react';

function ProjectsView() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/api/projects')
      .then((response) => response.json())
      .then((data) => {
        console.log('Fetched projects:', data);
        setProjects(data); 
      })
      .catch((error) => {
        console.error('Error fetching projects:', error);
      });
  }, []); 

  return (
    <div className='projects-container'>
      <h1>Projects</h1>
      <div className='projects-list'>
        {projects.map((project) => (
          <div key={project.id} className='project'>
            <h3>{project.ProjectName}</h3>
            <p>{project.description}</p>
            <a href={project.ProjectLink} target='_blank' rel='noopener noreferrer'>
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsView;
