import React from 'react';
import './App.css';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">React - Dynamic Search Filter</h1>
      <SearchFilter />
    </div>
  );
}

export default App;
