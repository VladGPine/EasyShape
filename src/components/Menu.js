import React from 'react';

import '../css/menu.css';

class Menu extends React.Component {
	render() {
		return (
      <nav className="menu">
        <div className="nav-arrow"><span></span></div>
        <ul className='product-types'>
          <li><a href='http://#' alt="">Лосины</a></li>
          <li><a href='http://#' alt="">Топы</a></li>
          <li><a href='http://#' alt="">Комбинезоны</a></li>
          <li><a href='http://#' alt="">Сумки</a></li>
          <li><a href='http://#' alt="">Аксессуары</a></li>
          <li><a href='http://#' alt="">Экипировка</a></li>
          <li><a href='http://#' alt="">Скидки</a></li>
        </ul>
      </nav>
    )
  }
}

export default Menu;