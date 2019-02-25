import React from 'react';
import Product from './Product';
import productsData from './products'

import '../css/product-list.css'

import '../img/1.jpg';
import '../img/2.jpg';
import '../img/3.jpg';
import '../img/4.jpg';
import '../img/5.jpg';
import '../img/6.jpg';
import '../img/7.jpg';
import '../img/8.jpg';
import '../img/9.jpg';
import '../img/10.jpg';
import '../img/11.jpg';
import '../img/12.jpg';
import '../img/13.jpg';
import '../img/14.jpg';

function ProductList() {
  const products = productsData.map(item => <Product key={item.id} product={item} />);

  return (
    <div className='product-list'>
      {products}
    </div>
  )
}

export default ProductList