import React, { useEffect, useState } from 'react';
import './FeaturedBooks.css';
import booksData from './apiData'; // Assuming booksData.js is in the same directory

function FeaturedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Using local booksData instead of API call for now
    setBooks(booksData);
  }, []);

  return (
    <div>
      <h4 className="featureBooks">Featured Books</h4>
      <div className="container mt-5 text-center">
        <div className="row">
          {books.map((book) => (
            <div className="col-md-3 col-6 mb-4" key={book.id}>
              <div className="card">
                <img
                  src={book.coverImage}
                  className="card-img-top"
                  alt={book.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">{book.authors?.join(', ')}</p>
                  <p className="card-text">{book.description}</p>
                  <p className="card-text">Price: ${book.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedBooks;
