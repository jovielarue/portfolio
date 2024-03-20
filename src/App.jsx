import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <div className="app-inner">
        <Header />
        <Home />
      </div>
    </>
  )
}

export default App;