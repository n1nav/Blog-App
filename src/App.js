import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import BlogForm from './components/BlogForm';
import './styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-blog" element={<BlogForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
