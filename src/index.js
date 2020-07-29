import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'jquery/dist/jquery.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import 'font-awesome/css/font-awesome.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './bootstrap-color-reset.css';
import './index.css';
import App from './pages/Home';
import NotFound from './pages/404';
import Login from './pages/Auth/Login';
import NewLogin from './pages/Auth/New';
import Categories from './pages/Categories';
import NewCategory from './pages/Categories/New';
import NewVideo from './pages/Videos/New';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/auth/login" component={Login} />
      <Route path="/auth/new" component={NewLogin} />
      <Route path="/categories/new" component={NewCategory} />
      <Route path="/categories" component={Categories} />
      <Route path="/videos/new" component={NewVideo} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);