import React from 'react';
import { Home } from './Home';
import { Gallery } from './Gallery';
import { About } from './About';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './css/bar.css';
import './css/app.css';
import './css/home.css';
import './css/about.css';
import './css/gallery.css';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produtos" exact component={Gallery} />
          <Route path="/sobre" exact component={About} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;