import React from 'react';
import { Link } from "react-router-dom";

import '../css/details.css';

const Details = props => {
  
    console.log(props);
  
  return (
    <div className='details'>
      <div className='details-slider'>
        <img className='product-full-image' src='../img/my-heart-will-go-on-gray-pink/my-heart-will-go-on-fullphoto-min.jpg' alt="" />
        <ul className='preview-images'>
          <li className='preview-image'>
            <a href='/'>
              <img src='../img/my-heart-will-go-on-gray-pink/my-heart-will-go-on-preview-1.jpg' alt='preview' />
            </a>
          </li>
          <li className='preview-image'>
            <a href='/'>
              <img src='../img/my-heart-will-go-on-gray-pink/my-heart-will-go-on-preview-2.jpg' alt='preview' />
            </a>
          </li>
          <li className='preview-image'>
            <a href='/'>
              <img src='../img/my-heart-will-go-on-gray-pink/my-heart-will-go-on-preview-3.jpg' alt='preview' />
            </a>
          </li>
        </ul>
      </div>

      <div className='description'>
        <p className='details-category'>Лосины /</p>
        <h2 className="details-product-title">My Heart Will <br />Go On «Gray—Pink»</h2>
        <div className='details-price'>
          <span className="product-price">7290</span>
          <span className="product-discounted-price">2700</span>
        </div>
        <div className='product-description'>
          <p>Bona Classic  — это годами выверенная модель лосин. Это родоначальник, неповторимый оригинал. Такие должны быть у каждой девушки, и чем больше цветов, тем лучше, ведь каждый цвет уникален, также, как и вы, как и ваше настроение.</p>
        </div>
        <div className='product-materials'>
          <p className='product-material'><strong>Ткань:</strong> бифлекс</p>
          <p className='product-consist'><strong>Cостав:</strong> полиамид — 50%, полиэстер — 44%, эластан — 6%</p>
        </div>

        <form className='sizes'>
          <ul className='size-list'>
            <li className="size-item">
              <label className="size-label">
                <input type="checkbox" className="size-input"/>
                <span className="label-text">XS</span>
              </label>
            </li>
            <li className="size-item">
              <label className="size-label">
                <input type="checkbox" className="size-input"/>
                <span className="label-text">S</span>
              </label>
            </li>
            <li className="size-item">
              <label className="size-label">
                <input type="checkbox" className="size-input"/>
                <span className="label-text">M</span>
              </label>
            </li>
            <li className="size-item">
              <label className="size-label">
                <input type="checkbox" className="size-input"/>
                <span className="label-text">L</span>
              </label>
            </li>
            <li className="size-item">
              <label className="size-label">
                <input type="checkbox" className="size-input"/>
                <span className="label-text">XL</span>
              </label>
            </li>
          </ul>
          <Link className="dimensions-link" to='/dimensions'>
            таблица размеров
          </Link>
          <button className="add-to-cart btn">В корзину</button>
        </form>
      </div>

    </div>
  )
}

export default Details