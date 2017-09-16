import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import ContactsList from './component/ContactsList';
import MessageList from './component/MessageList';

const App = () => (
  <Router>
    <div>
      <nav id="navigation">
        <ul style={{ listStyle: 'none' }}>
          <li style={{ float: 'left' }}>
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'red' }} to="/contacts">Contacts</NavLink>
          </li>
          <li style={{ float: 'left' }}>
            <NavLink activeStyle={{ fontWeight: 'bold', color: 'red' }} to="/messages">Messages</NavLink>
          </li>
        </ul>
      </nav>
      <section style={{clear: 'both'}} id="routes">
        <Route path="/contacts" component={ContactsList} />
        <Route path="/messages" component={MessageList} />
      </section>
    </div>
  </Router>
);

export default App;
