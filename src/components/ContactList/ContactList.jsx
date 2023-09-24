import Contact from 'components/Contact/Contact';
import css from './ContactList.module.css'

const ContactList = ({ contacts, handleDelete }) => {
    return (
            <ul className={css.box}>
                {contacts.map(({name, number, id}) => (
                    <Contact name={name} number={number} key={id} id={id} handleDelete={handleDelete} />))}
            </ul>
    )
}

export default ContactList;