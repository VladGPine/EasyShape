import React, {Component} from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import Main from './components/Main';
import Footer from './components/Footer'

import './css/app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
				<div className="container">
					<Header />
          <Menu />
          <Main />
          <Footer />
				</div>
			</div> 
    )
  }
}


export default App