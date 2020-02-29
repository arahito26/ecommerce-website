import React from 'react';
import { connect } from 'react-redux';
import {  Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import asyncComponent from '../AsyncComponent'

const Login = asyncComponent(() => import('views/pages/Login'));
const Home = asyncComponent(() => import('views/pages/Home'));
const Product = asyncComponent(() => import('views/pages/Product'));
const PurchasedHistory = asyncComponent(() => import('views/pages/PurchasedHistory'));

const PublicRoutes = ({ isLoggedIn }) => {
  return (
    isLoggedIn ? (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            name="Home"
            component={Home}
          />
          <Route
            exact
            path="/product"
            name="Product"
            component={Product}
          />
          <Route
            exact
            path="/purchased"
            name="PurchasedHistory"
            component={PurchasedHistory}
          />
        </Switch>
      </BrowserRouter>
    ) : (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Redirect to="/login" />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  )
};

export default connect(({ auth }) => ({
  isLoggedIn: auth.username !== null && auth.password !== null
}))(PublicRoutes);
