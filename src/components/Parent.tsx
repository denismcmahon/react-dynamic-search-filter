import React from 'react';
import Child from './Child';
import { useState } from 'react';

export default function Parent() {
  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Grape',
    'Mango',
    'Orange',
    'Pineapple',
    'Strawberry',
    'Watermelon'
  ];
  const [filteredItems, setFilteredItems] = useState(items);

  const highlightSearchText = (filteredItems: string[], searchText: string) => {
    filteredItems.map((item) => (
      console.log('DM ==> item: ', item)
    ));
  }

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    let filteredItems = items.filter((item) => item.toLowerCase().includes(searchText.toLowerCase()));
    highlightSearchText(filteredItems, searchText);
    setFilteredItems(filteredItems);
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
        {filteredItems.map((item) => (
          <li key={item} className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}