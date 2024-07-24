import React from "react";
import "./About.css";


function About() {
  return (
    <div>
      <div className="container aboutTop text-center">
        <div className="row">
          <div className="col-md-6 col-12">
            <h5 className="heading">
              About Book.com
            </h5>
            <p className="line">
              Welcome to Book.com, your ultimate destination for all things books!
              We bring you a vast collection of bestsellers, classics, and new releases.
              Dive into the world of literature and discover your next favorite read.
            </p>
            <p className="line">
              Our mission is to make books accessible to everyone and foster a love for reading.
              With our user-friendly platform, finding and purchasing books online has never been easier.
              Join us on this literary journey and enrich your life with knowledge and adventure.
            </p>
          </div>
          <div className="col-md-6 col-12">
            <img className="booksImg" src="../images/books.png" alt="books" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

