import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import { Routes, Route } from "react-router-dom";

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
            </>
          } />

<         Route path='/contact' element={
            <>
              <Header />
            </>
          } />
        </Routes>
      </div>
    </>
  )
}

export default App;