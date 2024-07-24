import React from 'react'
import './FeaturedBooks.css'

function FeaturedBooks() {
  return (
    <div>
      <h4 className='featureBooks'>Featured Books</h4>
      <div class="container mt-5 text-center">
        <div class="row">
            <div class="col">
            Fiction
            </div>
            <div class="col">
            History
            </div>
            <div class="col">
            Biography
            </div>
            <div class="col">
            Novels
            </div>
        </div>
        </div>
    </div>
  )
}

export default FeaturedBooks
