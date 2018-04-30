import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import registerServiceWorker from './registerServiceWorker';
import Header from './components/Header';

const DashboardPage = () => (
  <div>
    <h1>Dashboard Page</h1>
  </div>
);

const AboutPage = () => (
  <div>
    <h1>About Page</h1>
  </div>
);

const Article = () => (
  <div>
    <h1>Article Page</h1>
  </div>
);

const Design = () => (
  <div>
    <h1>Designe Page</h1>
  </div>
);

const notFound = () => (
  <div>
    <Link to="/">Not Found</Link>
  </div>
);



const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} />
        <Route path="/About" component={AboutPage} exact={true} />
        <Route path="/Article" component={Article} exact={true} />
        <Route path="/Design" component={Design} exact={true} />
        <Route component={notFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
