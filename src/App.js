import React, { Component } from 'react';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import { v4 as uuidv4 } from 'uuid';

import './styles.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    const { value } = event.currentTarget;
    this.setState({ filter: value });
  };

  isRepeatedName = name => {
    const repeatedName = this.state.contacts
      .map(contact => contact.name.toLowerCase())
      .includes(name.toLowerCase());

    return repeatedName;
  };

  addNewContact = ({ name, number }) => {
    if (this.isRepeatedName(name)) {
      alert(`${name} is already in contacts.`);
    } else {
      const newContact = {
        name: name,
        number: number,
        id: uuidv4(),
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
    }
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.filterContacts();

    return (
      <div className="Wrapper">
        <h1>Phonebook</h1>
        <ContactForm addNewContact={this.addNewContact} />

        <h2>Contacts</h2>
        <Filter onChangeFilter={this.changeFilter} filter={filter} />
        <ContactList
          filteredContacts={filteredContacts}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;
