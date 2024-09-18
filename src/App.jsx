// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SchemeListPage from './pages/SchemeListPage';

import CategoryGrid from './components/CategoryGrid';  // Import CategoryGrid

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Home Page route */}
          <Route path="/" element={<HomePage />} />
          
          {/* Schemes List Page route */}
          <Route path="/schemes" element={<SchemeListPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
