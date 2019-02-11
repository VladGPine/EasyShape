import React from 'react';

import '../css/menu.css';

class Menu extends React.Component {
  slideMenu(e) {
    e.preventDefault();
    const menu = document.getElementById("menu");
    menu.classList.toggle("menu-on");
  }

	render() {
		return (
      <nav className="menu" id="menu">
        <div className="nav-arrow" onClick={this.slideMenu.bind(this)}><span></span></div>
        <ul className='product-types'>
          <li><a href='http://#' alt="">Лосины</a></li>
          <li><a href='http://#' alt="">Топы</a></li>
          <li><a href='http://#' alt="">Комбинезоны</a></li>
          <li><a href='http://#' alt="">Сумки</a></li>
          <li><a href='http://#' alt="">Аксессуары</a></li>
          <li><a href='http://#' alt="">Экипировка</a></li>
          <li><a href='http://#' alt="">Скидки</a></li>
        </ul>
        <ul className="menu-footer">
          <li><a href='http://#'>О магазине</a></li>
          <li><a href='http://#'>Оплата и доставка</a></li>
          <li><a href='http://#'>Нужна помощь?</a></li>
        </ul>
        <ul className="menu-social">
          <li className="tm"><a href='http://#'><img src={require("../img/Telegram.png")} alt="Telegram"></img></a></li>
          <li className="wp"><a href='http://#'><img src={require("../img/Whatsapp.png")} alt="Whatsapp"></img></a></li>
        </ul>
      </nav>
    )
  }
}

export default Menu;