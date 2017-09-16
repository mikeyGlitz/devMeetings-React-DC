import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import faker from 'faker';
import UserDisplay from './UserDisplay';


// function App() {

// const users = [];
// for(let i = 0; i < 5; i++) {
//   contacts.push({
//     id: faker.random.uuid(),
//     favorite: faker.random.boolean(),
//     name: faker.name.findName(),
//     email: faker.internet.email(),
//     address: faker.address.streetAddress(),
//     phone: faker.phone.phoneNumber(),
//     tags: faker.random.words().split(' ')
//   });
// }

//   const favorites = users.filter(user => user.favorite);
//   return (
//     <Router>
//       <div>
//         <div>
//           {users.map((user) => <div><Link key={user.id + Date.now()} to={`/user/${user.id}`}>{user.name}</Link></div>)}
//         </div>
//         <div>
//           <Route path="/user:id" render={() => <UserDisplay users={users} />} />
//         </div>
//       </div>
//     </Router>
//   );
// }

const contacts = [];
const seed = Math.floor(Math.random() * 20);
for (let i = 0; i < seed; i++) {
  contacts.push({
    id: faker.random.uuid(),
    favorite: faker.random.boolean(),
    name: faker.name.findName(),
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    phone: faker.phone.phoneNumber(),
    tags: faker.random.words().split(' ')
  });
}

const ContactDisplay = ({ match: { params: { id } } }) => {
  const user = contacts.find(contact => contact.id === id);
  return <UserDisplay user={user} />;
};

class ContactsList extends Component {
  state = {
    filter: '',
    order: '',
  };

  setOrder() {
    let order;
    if (this.state.order.length === 0 || this.state.order === 'desc') {
      order = 'asc';
    }
    else {
      order = 'desc';
    }

    this.setState({ order });
  }

  constructor(props) {
    super(props);
    this.setOrder = this.setOrder.bind(this);
  }

  render() {

    const { filter, order } = this.state;

    let contactsList = filter.length === 0 ?
      contacts : contacts.filter(contact => {
        // Can I find what I'm searching for across all fields?
        return contact.address.indexOf(filter) >= 0 ||
          contact.email.indexOf(filter) >= 0 ||
          contact.name.indexOf(filter) >= 0 ||
          contact.phone.indexOf(filter) >= 0 ||
          contact.tags.filter(tag => tag.indexOf(filter) > 0).length > 0;
      });

    // Sort the order of the contacts if one is selected
    if (order.length > 0) {
      contactsList = contactsList.sort(({ name: a }, { name: b }) => {
        if (a > b) return 1;
        if (a < b) return -1;
        return 0;
      });
      if (order === 'desc') {
        contactsList.reverse();
      }
    }

    return (
      <div>
        <input
          type="text"
          placeholder="Search Contacts"
          onChange={evt => this.setState({ filter: evt.target.value })}
        />
        <button onClick={this.setOrder}>
          {this.state.order.length > 0 ? this.state.order : 'Sort'}
        </button>
        <section id="current">
          <hr />
          <h1>Current</h1>
          <Route path="/contacts/:id" component={ContactDisplay} />
          <hr />
        </section>
        <section id="contactsList">
          <h1>Contacts:</h1>
          {contactsList.map(contact =>
            <div key={contact.id} className="contact">
              <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
            </div>
          )}
          {/* {contactsList.map(contact => <UserDisplay key={contact.id} user={contact} />)} */}
        </section>
      </div>
    );
  }
}

export default ContactsList;
