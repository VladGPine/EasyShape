import React from 'react';

import '../css/product.css'

class Product extends React.Component {
    render() {
        return (
            <div className='product'>
                <img className='product-image' src="http://bm.img.com.ua/nxs/img/prikol/images/large/0/0/307600.jpg" alt=""/>
                <p className="product-title">Christina Aguilera Royal «Black & Red»</p>
            </div>
        )
    }
  }

  export default Product