import React, {Component} from 'react';
import logo from './../../icons/bel7aG.svg';

const Header = () => (
  <div className="position-relative header">
    <header className="Header">
      <div className="display-flex padding-x-3 container-g">
        <div className="display-flex">
          <img src={logo} className="logo"/>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
