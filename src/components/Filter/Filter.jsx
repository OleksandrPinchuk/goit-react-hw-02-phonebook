import css from './Filter.module.css'
const Filter = ({ value, onChange }) => {
    return (
        <div className={css.container}>
            <label htmlFor="filter" className={css.titel}>Find contacts by name</label>
            <input type="text" name="filter" value={value} onChange={onChange} className={css.input}/>
        </div>
    )
};

export default Filter;