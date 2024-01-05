import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Header=()=>{
  return (
    <header>
      {/* Navigation links */}
      <nav className='desktop-nav'>
      <ul className='nav-list'>
      <li>
          <Link exact to="/" >
          </Link>
          <h4>Madelyn Torff</h4>
      </li>
      </ul>
      <ul className='list-item'>
      <li>
      <Link to="/about">About</Link>
      </li>
      <li>
      <Link to="/projects">Projects</Link>
      </li>
      <li>
      <Link to="/contact">Contact</Link>
      </li>
      </ul>
        
      </nav>
    </header>
  );
}

export default Header;
