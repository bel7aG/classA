import React from 'react';
import logo from './../../icons/bel7aG.svg';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="position-relative header">
    <header className="Header">
      <div className="display-flex px-3 container-g">
        <div className="display-flex logo-box">
          <NavLink to="/">
            <img src={logo} className="logo" alt="Smokers"/>
          </NavLink>
        </div>

        <div className="o display-flex flex-auto flex-justify-between">
          <div className="display-flex">
            <div className="header-search">
              <form role="search" className="position-relative">
                <label className="form-control header-search-wrapper">
                  <input
                    type="text"
                    className="form-control header-search-input"
                    placeholder="search smokers"
                  />
                </label>
              </form>
            </div>

            <ul className="display-flex pl-2 flex-items-center text-bold list-items">
              <li className="px-3 py-3 list-item">
                <NavLink to="/" activeClassName="nav-active" exact>Home</NavLink>
              </li>
              <li className="px-3 py-3 list-item">
                <NavLink to="/About" activeClassName="nav-active" exact>About</NavLink>
              </li>
              <li className="px-3 py-3 list-item">
                <NavLink to="/EditSmoker" activeClassName="nav-active" exact>Edit</NavLink>
              </li>
              <li className="px-3 py-3 list-item">
                <NavLink to="/Design" activeClassName="nav-active" exact>Design</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
);

export default Header;
