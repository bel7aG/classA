import React, {Component} from 'react';
import logo from './../../icons/bel7aG.svg';

const Header = () => (
  <div className="position-relative header">
    <header className="Header">
      <div className="display-flex padding-x-3 container-g">
        <div className="display-flex logo-box">
          <img src={logo} className="logo"/>
        </div>

        <div className="display-flex flex-auto flex-justify-between">
          <div className="display-flex">
            <div className="header-search">
              <form role="search" className="position-relative">
                <label className="form-control header-search-wrapper">
                  <input
                    type="text"
                    className="form-control header-search-input"
                    placeholder="search smokers"
                    autocapitalize="off"
                  />
                </label>
              </form>
            </div>

          </div>

          <div className="display-flex">

          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
