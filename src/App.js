import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

export default function App() {

  // componentDidMount() {
  //   const contacts = localStorage.getItem('contacts');
  //   const parcedContacts = JSON.parse(contacts);
  //   if (parcedContacts) {
  //     this.setState({ contacts: parcedContacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );

}