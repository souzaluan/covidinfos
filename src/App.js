import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { GlobalStyle } from './components/GlobalStyle';
import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import WorldwidePage from './pages/WorldwidePage';
import VaccinesPage from './pages/VaccinesPage';

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/search" component={SearchPage} />
      <Route path="/worldwide" component={WorldwidePage} />
      <Route path="/vaccines" component={VaccinesPage} />
    </Switch>
  </BrowserRouter>
);
export default App;
