import { useState } from 'react';
import './App.css';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';
import { Routes, Route } from "react-router-dom";
import Contact from './components/Contact';

function App() {

  return (
    <>
      <div className="app-inner">
        <Routes>
          <Route path='/' element={
            <> 
              <Header />
              <Home />
            </>
          } />
          
          <Route path='/resume' element={
            <>
              <Header />
              <Resume/>
            </>
          } />

          <Route path='/projects' element={
            <>
              <Header />
              <Projects />
            </>
          } />

<         Route path='/contact' element={
            <>
              <Header />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </>
  )
}

export default App;