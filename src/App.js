import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Home from './pages/Home';
import Contacts from './pages/Contact';
import ContactDetails from './pages/ContactDetails';
import ContactEdit from './pages/ContactEdit';
import Footer from './cmps/Footer';

import NavBar from './cmps/NavBar';

function App() {
  return (
    <main className="main flex column">
      <Router history={history}>
        <NavBar />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/contact' component={Contacts} exact />
          <Route path='/contact/edit/:id?' component={ContactEdit} exact />
          <Route path='/contact/:id' component={ContactDetails} exact />
          
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;