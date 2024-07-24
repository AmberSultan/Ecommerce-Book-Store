import React from "react";
import Search from "../Search/Search";
import FeaturedBooks from "../FeaturedBooks/FeaturedBooks"

import "./Home.css";

function Home() {
  return (
    <div>
      <div className="container homeTop text-center">
        <div className="row">
          <div className="col-md-6 col-12">
            <h5 className="heading">
              Buy Books Online? <br />
              From Bestsellers
            </h5>
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

      {/* <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
        <span class="input-group-text" id="basic-addon2">@example.com</span>
        </div> */
      }
      <FeaturedBooks/>
    </div>
  );
}

export default Home;
