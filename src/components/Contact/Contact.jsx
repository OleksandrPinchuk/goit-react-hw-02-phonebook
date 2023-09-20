const Contact = ({name, number, id, handleDelete}) => {
    return (
        <li>
            {name}:
            {number}
            <button type="button" aria-label="Close" onClick={()=>handleDelete(id)}>delete</button>
        </li>)
};

export default Contact;