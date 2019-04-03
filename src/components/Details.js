import React from 'react';

import '../css/details.css';

const Details = props => {
  return (
    <div className='details'>
      <img className='details-product-image' src='../img/1.jpg' alt="" />
      <div className='description'>
        <p className='details-category'>Лосины /</p>
        <h2 className="details-product-title">My Heart Will <br/>Go On «Gray—Pink»</h2>
        <div className='details-price-block'>
          <span className="details-price">7290</span>
          <span className="details-discounted-price">2700</span>
        </div>
      </div>

    </div>
  )
}

export default Details