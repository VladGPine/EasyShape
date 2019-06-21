import React from 'react'
import { Route } from "react-router-dom"
import ProductList from './ProductList'
import Details from './Details'
import Cart from './Cart'
import Dimensions from './Dimensions'

import '../css/main.css'
function Main(props) {
  return (
    <main>
      <Route exact path='/' component={ProductList}></Route>
      <Route path='/details' component={Details}></Route>
      <Route path='/cart' component={Cart}></Route>
      <Route path='/dimensions' component={Dimensions}></Route>
    </main>
  )
}

export default Main