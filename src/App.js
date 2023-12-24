import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ClientHome from './components/ClientHome';
import Home from './components/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>        
        <Route path="/" element={<Home />} />
        <Route path="/ClientHome" element={<ClientHome/>} />
      </Routes>
    </Router>
  );
}

export default App;
