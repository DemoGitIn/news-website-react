import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Subscribe from './pages/subscribe/Subscribe';

import News from './pages/news/News';
import Home from './pages/home/Home';
import Business from './pages/Business';
import Entertainment from './pages/Entertainment';
import Science from './pages/Science';
import Sports from './pages/Sports';
import Technology from './pages/Technology';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/subscribe">
          <Subscribe />
        </Route>
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/business">
          <Business />
        </Route>
        <Route exact path="/entertainment">
          <Entertainment />
        </Route>
        <Route exact path="/science">
          <Science />
        </Route>
        <Route exact path="/sports">
          <Sports />
        </Route>
        <Route exact path="/technology">
          <Technology />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
