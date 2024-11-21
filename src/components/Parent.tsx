import React from 'react';
import Child from './Child';

export default function Parent() {
  const items = [
    'An item',
    'A second item',
    'A third item',
    'A fourth item',
    'A fifth item',
    'A sixth item',
  ];
  const handleSearchInput = () => {
    console.log('Search input changed');
  }
  return (
    <div className="card p-3 shadow-sm">
      <h2 className="card-title">Dynamic Search Filter</h2>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Search</span>
        <input
          type="text"
          className="form-control"
          placeholder="Enter search term"
          aria-label="Search"
          aria-describedby="Search Input"
          onChange={handleSearchInput}
        />
      </div>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}