import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.css'

function Cart() {
  const cartItems = useSelector((state) => state.cart);

  return (
    <div>
      <h5 className='mt-3'><b>Your Cart</b></h5>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div className='cTop' key={item.id}>
            <h5>Book Tiltle :{item.title}</h5>
            <img 
              src={item.coverImage}
              className="card-img-top cImg "
              alt={item.title}
            />
            <p>Quantity: {item.quantity}</p>
            <p><b>Price: ${item.price * item.quantity}</b></p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
