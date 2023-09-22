import { Component } from "react";
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from "./Filter/Filter";
import contacts from '../data/contacts.json';

export class App extends Component {
  state = {
    contacts,
    filter: '',
  }

  addContact = (contactByForm) => {
    const isAlreadyExist = this.state.contacts.find(
      (contact) => contact.name.toLowerCase() === contactByForm.name.toLowerCase()
    )
    if (isAlreadyExist) return alert ( contactByForm.name + ' is already in contacts')

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


  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  visibleContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  };


  render() {
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList contacts={this.visibleContacts()} handleDelete={this.handleDelete} />
      </div>
      
    )
  }
  

};


