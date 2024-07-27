import React, { useState } from 'react';
import booksData from '../../context/apiData';
import './Search.css';

function Search() {
  const [searchInput, setSearchInput] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    const results = booksData.filter((book) =>
      book.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <div className="mail">
        <div className="search">
          <input
            className="search"
            type="text"
            placeholder="Discover your next read"
            value={searchInput}
            onChange={handleInputChange}
          />
        </div>
        <button className="notify" onClick={handleSearch}>Search</button>
      </div>
      <div className="results">
        {searchResults.length > 0 ? (
          searchResults.map((book) => (
            <div key={book.id} className="result-item">
              <img src={book.coverImage} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.authors?.join(', ')}</p>
              <p>{book.description}</p>
              <p>Price: ${book.price}</p>
            </div>
          ))
        ) : (
          searchInput && <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default Search;
