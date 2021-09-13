import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Details from './components/Details/Details';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route to='/'>
            <Home />
          </Route>
          <Route to='/details'>
            <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
