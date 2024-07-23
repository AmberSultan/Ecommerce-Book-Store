import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

import { useState } from 'react';

function App() {

  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };
  return (
    <div className="App">
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Routes>
           <Route path="/" element={<Home />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
