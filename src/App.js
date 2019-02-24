import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Menu from './components/Menu';
import Backdrop from './components/Backdrop';
import Main from './components/Main';
import Cart from './components/Cart'
import Footer from './components/Footer'
import Routes from './components/Routes'
import './css/app.css';

class App extends Component {
  state = {
    MenuOpen: false
  };

  menuClickHandler = () => {
    this.setState((prevState) => {
      return { MenuOpen: !prevState.MenuOpen };
    })
  };

  backdropClickHandler = () => {
    this.setState({ MenuOpen: false });
  };

  render() {
    let menu;
    let backdrop;

    if (this.state.MenuOpen) {
      menu = <Menu />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    };

    return (
      <Router>
        <div className="app">
          <div className="container">
            <Header menuOpenClickHandler={this.menuClickHandler} />
            {menu}
            {backdrop}
              <Route exact path="/" component={Main} />
              <Route path="/cart" component={Cart} />
            <Footer />
          </div>
        </div>
      </Router>
    )
  }
}


export default App