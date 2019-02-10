import React from 'react';

import '../css/product.css';
import '../img/productPhoto.jpg';

class Product extends React.Component {
	render() {
		return (
			<div className='product'>
				<a href='http://#' alt="">
					<img className='product-image' src={require('../img/productPhoto.jpg')} alt="" />
					<p className="product-title">Christina Aguilera Royal «Black & Red»</p>
					<div className='price'>
						<span className="discount">2 650</span> 1 990
					</div>
				</a>
			</div>
		)
	}
}

export default Product