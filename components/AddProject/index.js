import React, { useState } from 'react';
import './index.css';
import bottomImg from '../Images/Vector.png';

function AddProject() {
  const [projectDetails, setProjectDetails] = useState({
    ProjectName: '',
    ProjectLink: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8001/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(projectDetails),
      });
      const data = await response.json();
      console.log('Project added:', data);
      setProjectDetails({
        ProjectName: '',
        ProjectLink: '',
        description: '',
      });
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <div className='add-prjct-container'>
      <h1 className='add-title'>Add Project</h1>
      <hr className='line'/>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='ProjectName'>Project Name:</label>
          <input
            type='text'
            id='ProjectName'
            name='ProjectName'
            value={projectDetails.ProjectName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor='ProjectLink'>Project Link:</label>
          <input
            type='text'
            id='ProjectLink'
            name='ProjectLink'
            value={projectDetails.ProjectLink}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <textarea
            id='description'
            name='description'
            value={projectDetails.description}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Add</button>
      </form>
      <img src={bottomImg} alt='bottom-img' className='bottom-img' />
    </div>
  );
}

export default AddProject;
