import { Component } from 'react';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }
    
    handleChange = ({ target: { value, name } }) => {
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state)
    }
    
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required value={this.state.name} onChange={this.handleChange} />
                <label htmlFor="number">Number</label>
                <input type="tel" name="number" pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required value={this.state.number} onChange={this.handleChange}/>
                <button type="submit">Add contact</button>
            </form>
        );
    }
}

export default ContactForm;