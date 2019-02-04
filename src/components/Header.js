import React from 'react';

import '../css/header.css';

class Header extends React.Component {
  render() {
    return (
      <header className='page-header'>
				<ul>
					<li className="header-menu"><a href="http://#" alt='Menu'><span></span></a></li>
					<li className='logo'><a href="http://#">Easy<strong>Shape</strong></a></li>
					<li className='cart'><a href="http://#" alt='Cart'><i className="fas fa-shopping-cart fa-lg"></i></a></li>
				</ul>
      </header>
    )
  }
}

export default Header