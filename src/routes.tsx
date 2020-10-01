import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Search from 'pages/Search';
import Favorite from 'pages/Favorite';
import BookDetail from './pages/BookDetail';

const Routes = () => (
  <BrowserRouter>
    <Route path="/" component={Home} exact />
    <Route path="/search" component={Search} exact />
    <Route path="/favorite" component={Favorite} exact />
    <Route path="/books/:id" component={BookDetail} />
    <Route path="/books" exact>
        <Redirect to="/search" />
    </Route>
  </BrowserRouter>
);

export default Routes;
