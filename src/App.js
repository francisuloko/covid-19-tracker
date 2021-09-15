import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import World from './components/Home/World';
import Details from './components/Details/Details';
import getData from './api/covid';

function App() {
  const state = useSelector((state) => state.covid);
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
        <Route to={`/${state.country}`}>
          <Details />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
