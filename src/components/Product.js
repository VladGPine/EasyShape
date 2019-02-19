import React from 'react';

import '../css/product.css';


function Product(props) {
	
	return (
		<div className='product' key={props.product.id}>
			<a href='/' alt="">
				<img className='product-image' src={props.product.imgUrl} alt="" />
				<p className="product-title">{props.product.title}</p>
				<div className='price-block'>
					<span className="price" 
						style={{
							color: props.product.discount ? "#ccd1d9" : "#2e2b40",
							textDecoration: props.product.discount ? "line-through" : "none"
						}}>{props.product.price.toLocaleString(
						'ru-RU', 
						{
							style: 'currency', 
							minimumFractionDigits: 0, 
							currency: 'RUB'
						})}
					</span>
					<span className="discounted-price" 
						style={{ opacity: props.product.discount ? 1 : 0 }}> {props.product.discount.toLocaleString(
							'ru-RU', 
							{ 
								style: 'currency', 
								minimumFractionDigits: 0, 
								currency: 'RUB' 
							})}
					</span>
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