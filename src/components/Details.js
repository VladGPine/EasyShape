import React from 'react';

import '../css/details.css';

const Details = props => {
  return (
    <div className='product'>
      <img className='product-image' src='../img/1.jpg' alt="" />
      <p className='category'>Лосины</p>
      <p className="product-title">My Heart Will Go On</p>
      <div className='price-block'>
        <span className="price"></span>
        <span className="discounted-price"></span>
      </div>
    </div>
  )
}

export default Details