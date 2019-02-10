import React from 'react';
import Product from './Product';
import '../css/main.css';

class Main extends React.Component {
  render() {
    return (
      <main>
        <div className="product-list">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </main>
    )
  }
}

export default Main