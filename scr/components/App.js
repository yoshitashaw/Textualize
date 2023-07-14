import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/Textform';
import About from './components/About';
import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  
  // function to change mode
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'grey';
    }
  }

  //content that'll be rendered on the main page
  return (
    <>
      <Router>
        <Navbar title="TEXTUALIZE" mode={mode} toggleMode={toggleMode} /> 
          <div className="container my-3" >
            <Routes>
                <Route exact path="/about" element={<About mode={mode} />} />                       
                <Route exact path="/" element={<TextForm heading="Enter content here..." mode={mode} />} />
            </Routes>         
            {/* <About /> */}
          </div>
      </Router>      
    </>
  );
}

export default App;
