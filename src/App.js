import React from 'react';
import { Home } from './Home';
import { Gallery } from './Gallery';
import { About } from './About';
import { Category_1 } from './Category_1';
import { Category_2 } from './Category_2';
import { Category_3 } from './Category_3';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './css/bar.css';
import './css/app.css';
import './css/home.css';
import './css/about.css';
import './css/gallery.css';
import './css/category.css';

function App() {
  return (
    <Router basename='/'>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/produtos" exact component={Gallery} />
          <Route path="/sobre" exact component={About} />
          <Route path="/1" exact component={Category_1} />
          <Route path="/2" exact component={Category_2} />
          <Route path="/3" exact component={Category_3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;