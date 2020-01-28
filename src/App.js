import React from 'react';
import { HashRouter as Router, Switch, Route} from 'react-router-dom';
import history from './history';
import './App.css';

import Home from './views/HomePage.js';
import Contacts from './views/ContactPage.js';
import ContactDetailsPage from './views/ContactDetailsPage.js';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/contact' component={Contacts} exact />
          <Route path='/contact/:id' component={ContactDetailsPage} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
