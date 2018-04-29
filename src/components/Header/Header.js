import React, {Component} from 'react';
import logo from './../../icons/bel7aG.svg';

const Header = () => (
  <div className="position-relative header">
    <header className="Header">
      <div className="display-flex px-3 container-g">
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

            <ul className="display-flex pl-2 flex-items-center text-bold list-items">
              <li className="px-3 list-item">
                <a href="#">Home</a>
              </li>
              <li className="px-3 list-item">
                <a href="#">About</a>
              </li>
              <li className="px-3 list-item">
                <a href="#">Article</a>
              </li>
              <li className="px-3 list-item">
                <a href="#">Design</a>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </header>
  </div>
);

export default Header;
