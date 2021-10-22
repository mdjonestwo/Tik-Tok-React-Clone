import React from 'react';
import './App.css';
import Video from './Video.js';

function App() {
  return (
    //BEM Naming convention
    <div className="app">
   
      <div className="app_videos">
        <Video />
        <Video /> 
      </div>
      
    </div>
  );
}

export default App;
 