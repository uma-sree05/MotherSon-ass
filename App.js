import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Projects from './components/Projects';
import ProjectsView from './components/ProjectsView/ProjectsView.js';
import Contact from './components/Contact';

const App=()=>(
  <BrowserRouter>
  <Routes>
  <Route exact path='/About' element={<About/>}/>
  <Route exact path='/Projects' element={<Projects/>}/>
  <Route exact path ='/' element={<About/>}/>
  <Route path="/ProjectsView" component={ProjectsView} />
  <Route exact path='/Contact' element={<Contact/>}/>
  </Routes>
  </BrowserRouter>
)

export default App;
