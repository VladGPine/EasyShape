import React from 'react';

import '../css/details.css';

const Details = props => {
  return (
    <div className='details'>
      <img className='details-product-image' src='../img/1.jpg' alt="" />
      <div className='description'>
        <p className='details-category'>Лосины /</p>
        <p className="details-product-title">My Heart Will Go On</p>
        <div className='details-price-block'>
          <span className="details-price"></span>
          <span className="details-discounted-price"></span>
        </div>
      </div>

    </div>
  )
}

export default Details