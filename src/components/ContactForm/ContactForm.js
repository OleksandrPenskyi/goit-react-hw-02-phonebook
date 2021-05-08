import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  onInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onSubmitAddContact = event => {
    event.preventDefault();

    this.props.addNewContact(this.state);
  };

  render() {
    const idForNameLabel = uuidv4();
    const idForNumber = uuidv4();

    const { name, number } = this.state;

    return (
      <form onSubmit={this.onSubmitAddContact} className={styles.Form}>
        <label className={styles.Label} htmlFor={idForNameLabel}>
          Name
        </label>
        <input
          onChange={this.onInputChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          className={styles.Input}
          id={idForNameLabel}
        />

        <label className={styles.Label} htmlFor={idForNumber}>
          Number
        </label>
        <input
          onChange={this.onInputChange}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          className={styles.Input}
          id={idForNumber}
        />

        <button type="submit" className={styles.Btn}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
