import PropTypes from 'prop-types';
import styles from './ContactListItem.module.css';

export default function ContactListItem({ contact, onDelete }) {
    const { id, name, number } = contact;
    
    return (
        <li
            className={styles.contactListItem}>
            {name}: {number}

        <button
            className={styles.contactListItem__button}
            type='button'
            id={id}
            onClick={event => onDelete(event.target.id)}
        >
            Delete
        </button>
    </li>
    );
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }),
    onDelete: PropTypes.func.isRequired,
};