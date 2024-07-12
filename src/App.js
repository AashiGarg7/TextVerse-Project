import React, { useState } from 'react';
import Nav from './components/Nav';
import Textform from './components/Textform';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   BrowserRouter,
//   Route,
//   Routes, //Switches
//   Navigate,
//   Link,
//   Switch,
// } from "react-router-dom";



function App() {

  const [mode,setMode] = useState('light');
  const ModeChange = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#212529';
      document.body.style.color = 'white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }

  // const router = createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Textform mode={mode} ModeChange= {ModeChange}/>
  //   },
  //   {
  //     path:"/about",
  //     element:<About mode={mode} ModeChange= {ModeChange}/>
  //   },
  // ])

  return( 
    // <Router>
      <div className={`${mode === 'dark' ? 'dark-mode' : 'light-mode'}`}>
        <Nav mode={mode} ModeChange= {ModeChange}/>
        <Routes>
          <Route exact path="" element={<Textform mode={mode} ModeChange= {ModeChange} heading = "TextVerse - Word Counter, Character Counter, Copy Text, Remove Extra Spaces"/>}></Route>
          <Route exact path="/about" element={<About mode={mode} ModeChange= {ModeChange}/>}></Route>  
        </Routes>
      </div>
    // </Router>
  );
}

export default App;
