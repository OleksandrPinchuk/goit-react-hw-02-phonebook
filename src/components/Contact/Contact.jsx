const Contact = ({name, number, id, handleDelete}) => {
    return (
        <li key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <button type="button" aria-label="Close" onClick={() => handleDelete(id)}>delete</button>
        </li>)
};

export default Contact;