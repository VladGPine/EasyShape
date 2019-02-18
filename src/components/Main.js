import React from 'react';
import Product from './Product';
import productsData from './products'
import '../css/main.css';
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

function Main() {
  const products = productsData.map(item => <Product key={item.id} product={item} />);
  
  return (
      <main>
        <div className="product-list">
          {products}
        </div>
      </main>
  )
}

  

export default Main