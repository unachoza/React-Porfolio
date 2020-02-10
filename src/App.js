import React from 'react';
import Homepage from './Pages/Homepage/Homepage.component';
import ProjectCard from './Components/ProjectCard/Project-Card.component'
import ProjectPage from './Pages/Project-Page/Project-Page.component'
import './App.css';

function App() {
  return (
    <div className="App">
      <Homepage />
      <ProjectCard />
      <ProjectPage />
    </div>
  );
}

export default App;
