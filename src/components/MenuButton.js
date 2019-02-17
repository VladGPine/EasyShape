import React from 'react';

import '../css/menu-button.css'

const MenuButton = props => (
  <div className="header-menu" onClick={props.click}>
    <span></span>
  </div>
);


export default MenuButton;