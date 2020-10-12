import React from 'react';
import { Home } from './Home';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './css/bar.css';
import './css/app.css';
import './css/home.css';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;