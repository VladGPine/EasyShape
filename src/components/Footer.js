import React from 'react';

import '../css/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <p className="copy">&#169; &laquo;EasyShape&raquo;, {new Date().getFullYear()}</p>
      </footer>
    )
  }
}


export default Footer