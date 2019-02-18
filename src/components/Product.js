import React from 'react';

import '../css/product.css';


function Product (props) {
	return (
		<div className='product' key={props.product.id}>
			<a href='/' alt="">
				<img className='product-image' src={props.product.imgUrl} alt="" />
				<p className="product-title">{props.product.title}</p>
				<div className='price'>
					<span className="discount">{props.product.price}</span> {props.product.discount}
				</div>
			</a>
		</div>
	)
}

export default Product

// size: {
// 	extrasmall: 'XS',
// 	small: 'S',
// 	medium: 'M',
// 	large: 'L'
// 	extralarge: 'XL'
// }