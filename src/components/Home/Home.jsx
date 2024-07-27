import React from "react";

import { motion } from 'framer-motion';

import Search from "../Search/Search";
import FeaturedBooks from "../FeaturedBooks/FeaturedBooks"
import Testimonial from "../Testimonials/Testimonial";

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="container homeTop text-center">
        <div className="row">
          <div className="col-md-6 col-12">
          <motion.h5
              className="heading"
              initial={{ opacity: 0, y: -60 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
    >
              Buy Books Online? <br />
              From Bestsellers
              </motion.h5>
            <p className="line">
              The most appropriate book site to reach books :)
            </p>
            <Search />
          </div>
          <div className="col-md-6 col-12">
            <img className="booksImg" src="../images/books.png" alt="books" />
          </div>
        </div>
      </div>
      <FeaturedBooks/>
      <div className="testimonial">
        <Testimonial/>
      </div>
    </div>
  );
}

export default Home;
