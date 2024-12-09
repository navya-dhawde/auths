import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup.tsx';
import Login from './components/Login.tsx';

const App: React.FC = () => {
  return (
    <Router>
      <div className='mainn'>
        <h1>Welcome!</h1>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
