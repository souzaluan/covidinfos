import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import WorldwidePage from './pages/WorldwidePage';
import VaccinesPage from './pages/VaccinesPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/worldwide" component={WorldwidePage} />
      <Route path="/vaccines" component={VaccinesPage} />
    </Switch>
  </BrowserRouter>
);
export default App;
