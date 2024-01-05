import React from 'react';
import Header from '../Header'; 
import AddProject from '../AddProject';
import Projects from '../Projects';
import Contact from '../Contact'
import { useNavigate } from 'react-router-dom';
import mainImg from '../Images/image.png';
import './index.css'

function About() {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate('/projects');
  };

  const goToLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com'; 
  };
  return (
    <div>
      <Header/>
      <div className='main-container'>
      <div className='txt-container'>
        <h4 className='role'>UI/UX DESIGNER</h4>
        <h1>Hello,  my name is Madelyn Torff</h1>
        <p>Short text with details about you, what you do or your professional career.
         You can add more information on the about page.</p>
         <div className='btn-container'>
         <button type='submit' className='pr-btn' onClick={goToProjects}>Projects</button>
         <button type='submit' className='lkd-btn' onClick={goToLinkedIn}>LinkedIn</button>
         </div>
         </div>
        <div className='bg-container'>
        <img src={mainImg} alt='bg-img' className='image'/>
         </div>
      </div>
      <AddProject />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default About;
