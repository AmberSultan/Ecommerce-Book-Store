import React from "react";
import "./Search.css";

function Search() {
  return (
    <div>
      <div className="mail">
        <div className="search">
          <input
            className="search"
            type="text"
            placeholder="Discover your next read"
          />
        </div>
        <button className="notify">Search </button>
      </div>
    </div>
  );
}

export default Search;
