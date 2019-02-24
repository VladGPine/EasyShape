import React from 'react';

import '../css/header.css';
import MenuButton from './MenuButton';

// class Header extends React.Component {
// slideMenu(e) {
//   e.preventDefault();
//   const menu = document.getElementById("menu");
//   menu.classList.toggle("menu-on");
// }

// render() {
//   return (
const Header = props => (
  <header className='page-header'>
    <ul>
      <li>
        <MenuButton click={props.menuOpenClickHandler} />
      </li>
      <li className='logo'>
        <a href="http://#">
          Easy<span>Shape</span>
        </a>
      </li>
      <li className='cart'>
        <a href="http://#" alt='Cart'>
          {/* <i className="fas fa-shopping-cart fa-2x"></i> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xlink="http://www.w3.org/1999/xlink"
            width="20px" height="20px">
            <path fill-rule="evenodd" fill="rgb(204, 209, 217)"
              d="M19.800,9.013 C19.672,9.162 19.508,9.248
              19.308,9.273 L6.764,10.747 C6.772,10.803 
              6.790,10.890 6.818,11.007 C6.846,11.124 6.870,11.230
              6.890,11.327 C6.910,11.423 6.920,11.512 6.920,11.593 
              C6.920,11.722 6.824,11.979 6.632,12.366 L17.685,12.366 
              C17.893,12.366 18.074,12.443 18.226,12.596 C18.378,12.749 
              18.454,12.930 18.454,13.140 C18.454,13.349 18.378,13.530 
              18.226,13.684 C18.074,13.836 17.893,13.913 17.685,13.913 
              L16.917,13.913 L16.917,13.913 L6.151,13.913 L5.382,13.913 
              C5.174,13.913 4.994,13.836 4.842,13.684 C4.690,13.530 
              4.613,13.349 4.613,13.140 C4.613,13.027 4.657,12.868 
              4.746,12.662 C4.834,12.457 4.952,12.217 5.100,11.943 
              C5.248,11.669 5.330,11.516 5.346,11.484 L3.220,1.538 
              L0.769,1.538 C0.561,1.538 0.380,1.462 0.228,1.308 
              C0.076,1.155 -0.000,0.974 -0.000,0.764 C-0.000,0.555 
              0.076,0.374 0.228,0.221 C0.380,0.068 0.561,-0.009 
              0.769,-0.009 L3.844,-0.009 C3.973,-0.009 4.087,0.017 
              4.187,0.070 C4.287,0.122 4.367,0.184 4.427,0.257 C4.487,0.329 
              4.539,0.428 4.583,0.553 C4.628,0.678 4.657,0.785 4.673,0.873 
              C4.690,0.962 4.711,1.081 4.740,1.230 C4.767,1.379 4.786,1.481 
              4.794,1.538 L19.224,1.538 C19.432,1.538 19.612,1.614 19.764,1.767 
              C19.916,1.921 19.992,2.102 19.992,2.311 L19.992,8.499 
              C19.992,8.693 19.929,8.864 19.800,9.013 ZM18.455,15.460 
              C18.455,15.887 18.304,16.252 18.004,16.554 C17.704,16.856 
              17.341,17.007 16.917,17.007 C16.492,17.007 16.129,16.856 
              15.829,16.554 C15.529,16.252 15.379,15.887 15.379,15.460 
              C15.379,15.033 15.529,14.668 15.829,14.366 C16.129,14.064 
              16.492,13.913 16.917,13.913 C17.341,13.913 17.704,14.064 
              18.004,14.366 C18.305,14.668 18.455,15.033 18.455,15.460 
              ZM7.689,15.460 C7.689,15.887 7.539,16.252 7.238,16.554 
              C6.938,16.856 6.576,17.007 6.151,17.007 C5.727,17.007 
              5.364,16.856 5.064,16.554 C4.763,16.252 4.613,15.887 
              4.613,15.460 C4.613,15.033 4.764,14.668 5.064,14.366 
              C5.364,14.064 5.727,13.913 6.151,13.913 C6.576,13.913 
              6.938,14.064 7.238,14.366 C7.539,14.668 7.689,15.033 
              7.689,15.460 Z" />
          </svg>
        </a>
      </li>
    </ul>
  </header>
)

//   )
// }
// }

export default Header