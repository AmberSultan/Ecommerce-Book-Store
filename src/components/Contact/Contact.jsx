import React from "react";
import "./Contact.css";

function ContactCard() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="contact-card">
        <h2>Contact Us</h2>
        <div className="contact-details">
          <p>
            <strong>Email:</strong> contact@bookstore.com
          </p>
          <p>
            <strong>Phone:</strong> +123 456 7890
          </p>
          <p>
            <strong>Address:</strong> 123 Book Street, Book City, Pakistan
          </p>
        </div>
      </div>
      <div className="col-md-6 col-12">
        <img className="booksImg" src="../images/books.png" alt="books" />
      </div>
    </div>
  );
}

export default ContactCard;
