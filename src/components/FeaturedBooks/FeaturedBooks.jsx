import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FeaturedBooks.css';

function FeaturedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=12'); 
        setBooks(response.data.items);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <h4 className='featureBooks'>Featured Books</h4>
      <div className="container mt-5 text-center ">
        <div className="row">
          {books.map((book) => (
            <div className="col-md-3 col-6 mb-4" key={book.id}>
              <div className="card">
                <img src={book.volumeInfo.imageLinks?.thumbnail} className="card-img-top" alt={book.volumeInfo.title} />
                <div className="card-body">
                  <h5 className="card-title w-100 h-100">{book.volumeInfo.title}</h5>
                  <p className="card-text">{book.volumeInfo.authors?.join(', ')}</p>
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
