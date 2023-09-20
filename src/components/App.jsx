import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import contacts from '../data/contacts.json';

export class App extends Component {
  state = {
    contacts,
    name: '',
    number: ''
  }

  addContact = (contactByForm) => {
        const newContact = {
            ...contactByForm,
            id: nanoid(),
        };
        this.setState(prev => ({
            contacts: [newContact, ...prev.contacts],
        }))
  }
  
  handleDelete = (id) => {
        this.setState((prev) => ({
            contacts: prev.contacts.filter(contact => contact.id !== id),
        }))
    }

  

  

  render() {
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm  />
        <h2>Contacts</h2>
        <ContactList contacts={this.state.contacts} handleDelete={this.handleDelete} />
      </div>
      
    )
  }
  

};


