import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Projects from './pages/projects';


const App = () => {
  return (
    <div className='bg-[#0c0e0e]' >
      
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>


    </div>
  );
};

export default App;