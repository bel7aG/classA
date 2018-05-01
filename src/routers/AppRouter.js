import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from './../components/Header';
import AboutPage from '../components/About';
import DashboardPage from '../components/Dashboard';
import DesignPage from '../components/Design';
import EditSmokerPage from '../components/EditSmoker';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/About" component={AboutPage} exact={true} />
        <Route path="/EditSmoker" component={EditSmokerPage} exact={true} />
        <Route path="/Design" component={DesignPage} exact={true} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
