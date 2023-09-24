import { Component } from 'react';
import css from './ContactForm.module.css'

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    }
    
    handleChange = ({ target: { value, name } }) => {
        this.setState({[name]: value})
    }

    resetForm = () => {
        this.setState({name:'',number:''})
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.addContact(this.state);
        this.resetForm();
    }
    
    render() { 
        return ( 
            <form onSubmit={this.handleSubmit} className={css.form}>
                <label htmlFor="name" className={css.text}>Name</label>
                <input type="text" name="name" className={css.input}  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required value={this.state.name} onChange={this.handleChange} />
                <label htmlFor="number" className={css.text}>Number</label>
                <input type="tel" name="number" className={css.input} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required value={this.state.number} onChange={this.handleChange}/>
                <button className={css.button} type="submit">Add contact</button>
            </form>
        );
    }
}

export default ContactForm;