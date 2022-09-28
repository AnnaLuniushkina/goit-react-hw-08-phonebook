import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contacts/contacts-actions';
import styles from './FilterContact.module.css';

export default function FilterContact() {
    const value = useSelector(state => state.contacts.filter);
    const dispatch = useDispatch();

    return (
        <label className={styles.filter__label}>
            <p></p>
            <input
                className={styles.filter__input}
                type='text'
                name='filter'
                value={value}
                onChange={event => dispatch(changeFilter(event.currentTarget.value))} />
        </label>
    );
}