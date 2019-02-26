import React from 'react';
import { Route } from "react-router-dom";
import ProductList from './ProductList';
import Details from './Details';
import Cart from './Cart'

import '../css/main.css'
function Main() {
  return (
    <main>
      <Route exact path='/' component={ProductList}></Route>
      <Route path='/details' component={Details}></Route>
      <Route path='/cart' component={Cart}></Route>
    </main>
  )
}

export default Main