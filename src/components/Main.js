import React from 'react';
import Product from './Product';
import '../css/main.css';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </main>
    )
  }
}

export default Main