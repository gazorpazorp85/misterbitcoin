import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory} from 'history';

import Home from './pages/Home';
import Contact from './pages/Contact';
import ContactDetails from './pages/ContactDetails';
import ContactEdit from './pages/ContactEdit';
import Footer from './cmps/Footer';

import NavBar from './cmps/NavBar';

const history = createBrowserHistory();

function App() {
  return (
    <main className="main flex column">
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/contact' component={Contact} exact />
          <Route path='/contact/edit/:id?' component={ContactEdit} exact />
          <Route path='/contact/:id' component={ContactDetails} exact />
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;