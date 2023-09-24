import css from './Contact.module.css'
const Contact = ({ name, number, id, handleDelete }) => {
    return (
        <li className={css.box}>
            <p className={css.text}>{name}:</p>
            <p className={css.text}>{number}</p>
            <button type="button" aria-label="Close" className={css.button} onClick={() => handleDelete(id)}>delete</button>
        </li>)
};

export default Contact;