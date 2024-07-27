import React, { useEffect, useState } from 'react';
import './FeaturedBooks.css';
import { useNavigate } from 'react-router-dom';
import booksData from '../../context/apiData';

function FeaturedBooks() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setBooks(booksData);
  }, []);

  const handleBookClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      <h4 className='featureBooks mt-5 mb-5 fs-3'>Featured Books</h4>

<div className="container text-center">
  <div className="row category">
    <div className="col cat">Science Fiction</div>
    <div className="col cat">History</div>
    <div className="col cat">StoryBook</div>
    <div className="col cat">English Novels</div>
    <div className="col cat">Biography</div>
  </div>
</div>

      <div className="container mt-5 text-center">
        <div className="row">
          {books.map((book) => (
            <div className="col-md-3 col-6 mb-4" key={book.id} onClick={() => handleBookClick(book.id)}
              style={{ cursor: 'pointer' }}>
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
                  <p className="card-text"><b>Price: ${book.price}</b></p>
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