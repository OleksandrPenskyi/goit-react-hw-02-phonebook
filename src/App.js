import React, { Component } from 'react';
// import Form from './components/Form';

import { v4 as uuidv4 } from 'uuid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  onHandleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitName = event => {
    event.preventDefault();

    const { name, number } = this.state;

    const newContact = {
      name: name,
      number: number,
      id: uuidv4(),
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onHandleFilterContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { name, number, filter } = this.state;
    const filteredContacts = this.onHandleFilterContacts();

    return (
      <section>
        <h2>Phonebook</h2>
        <form onSubmit={this.onSubmitName}>
          <label>
            Name
            <input
              onChange={this.onHandleInputChange}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
            />
          </label>

          <label>
            Number
            <input
              onChange={this.onHandleInputChange}
              type="tel"
              name="number"
              value={number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>

        <h3>Contacts</h3>

        <label>
          Find contacts by name
          <input
            onChange={this.onHandleInputChange}
            type="text"
            name="filter"
            value={filter}
          />
        </label>

        <ul>
          {filteredContacts.map(({ name, number, id }) => (
            <li key={id}>
              {name}: {number}
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default App;
