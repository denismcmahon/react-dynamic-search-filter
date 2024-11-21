import React from 'react';
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
  const [filteredItems, setFilteredItems] = useState<string[]>(items);

  const highlightSearchText = (filteredItems: string[], searchText: string): string[] => {
    return filteredItems.map((item) => {
      const index = item.toLowerCase().indexOf(searchText.toLowerCase());
      if (index === -1) return item;

      const before = item.slice(0, index);
      const match = item.slice(index, index + searchText.length);
      const after = item.slice(index + searchText.length);
      
      return `${before}<span style="background-color: yellow;">${match}</span>${after}`;
    });
  };

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = event.target.value;
    const filteredItems = items.filter((item) =>
      item.toLowerCase().includes(searchText.toLowerCase())
    );
    const highlightedItems = highlightSearchText(filteredItems, searchText);
    setFilteredItems(highlightedItems);
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
        {filteredItems.map((item, index) => (
          <li 
            key={index} 
            className="list-group-item"
            dangerouslySetInnerHTML={{ __html: item }}
          >
          </li>
        ))}
      </ul>
    </div>
  );
}