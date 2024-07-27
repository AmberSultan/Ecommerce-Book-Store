import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Product.css';
import booksData from '../../context/apiData';

function Product() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((val) => val + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((val) => val - 1);
    }
  };

  useEffect(() => {
    // Find the book by id from booksData
    const selectedBook = booksData.find((book) => book.id === parseInt(id));
    setBook(selectedBook);
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="container text-center mt-5">
      <div className="row column-gap-1">
        <div className="col-md-6">
          <div className="card">
            <img 
              src={book.coverImage}
              className="card-img-top pImg"
              alt={book.title}
            />
          </div>
        </div>
        <div className="col-md-5 detail">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">{book.authors?.join(', ')}</p>
          <p className="card-text">{book.description}</p>
          <p className="card-text"><b>Price: ${book.price}</b></p>
          <p className='stars'><i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star" aria-hidden="true"></i>
          <i class="fa fa-star-half" aria-hidden="true"></i></p>
          <div className="row mt-5 mb-5 column-gap-1 ">
            <div className="col-md-6 count">
              <button className='incdec' onClick={handleIncrement}>+</button>
              <p className='number'>{count}</p>
              <button className='incdec' onClick={handleDecrement}>-</button>
            </div>
            <div className="col-md-5">
              <button className='cart' type="button">Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
