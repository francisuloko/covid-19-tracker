import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import World from './components/World/World';
import Country from './components/Country/Country';
import getData from './api/covid';
import './App.css';

function App() {
  const state = useSelector((state) => state.covid);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <Router>
      <div className="bg-light">
        <Switch>
          <Route path={`/${state.country}`}>
            <Country />
          </Route>
          <Route path="/">
            <World />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
