import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parcedContacts = JSON.parse(contacts);
    if (parcedContacts) {
      this.setState({ contacts: parcedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value, });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  handleDeleteContact = (contactID) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactID)
    }))
  };

  addNewContact = ({name, number}) => {
    const contact = {
      id: uuidv4(),
      name,
      number
    };

    if (name === '' || number === '') {
      alert('Please enter data');
      return;
    }

    const isInList = this.state.contacts.find(
      newContact => newContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInList) {
      alert(`Contact ${contact.name} is already exist`)
      return;
    }

    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  }

  render() {
    const { filter } = this.state;

    const filteredContacts = this.getFilteredContacts();
    
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addNewContact} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          filteredContacts={filteredContacts}
          handleDeleteContact={this.handleDeleteContact}
        />
      </>
    );
  }
}

export default App;
