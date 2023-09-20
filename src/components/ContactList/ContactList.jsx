import Contact from 'components/Contact/Contact';

const ContactList = ({ contacts, handleDelete }) => {
    return (
            <ul>
                {contacts.map(({name, number, id}) => (
                    <Contact name={name} number={number} key={id} handleDelete={handleDelete} 
                        
                />))}
            </ul>
    )
}

export default ContactList;