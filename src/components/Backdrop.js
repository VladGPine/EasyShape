import React from 'react';

import "../css/backdrop.css";

const Backdrop = props => (
  <div className="backdrop" onClick={props.click}></div>
);

export default Backdrop;