
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Table from './components/Table';
import Form from './components/Form';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </Router>
  );
};

export default App;
