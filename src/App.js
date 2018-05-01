import React, { Component } from 'react';
import Header from './components/Header';
import './styles/main.css';
import AppRouter from "./routers/AppRouter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export{ App as default, AppRouter };
