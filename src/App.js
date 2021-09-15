import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import World from './components/Home/World';
import Details from './components/Details/Details';
import getData from './api/covid';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Router>
      <Switch>
        <Route to="/">
          <World />
        </Route>
        <Route to="/details">
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
