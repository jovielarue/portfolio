import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Resume from './components/Resume';
import { Routes, Route } from "react-router-dom";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <div className="app-inner">
      <Routes>
        <Route path='/' element={
          <> 
            <Header currentPage={currentPage} />
            <Home />
          </>
        } />
        
        <Route path='/resume' element={
          <>
            <Header />
            <Resume setCurrentPage={setCurrentPage}/>
          </>
        } />
      </Routes>
      </div>
    </>
  )
}

export default App;