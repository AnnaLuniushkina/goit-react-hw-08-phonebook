import { useDeleteContactMutation } from 'redux/api';
import styles from './ContactListItem.module.css';

const ContactListItem = ({ id, name, phone }) => {
    
    const [handleDelete, {isLoading: isDeleting}] = useDeleteContactMutation();

    return (
        <li
            id={id}
            className={styles.contactListItem}>
            {name}: {phone}

        <button
            className={styles.contactListItem__button}
            type='button'
            onClick={() => handleDelete(id)}
        >
            {isDeleting ? 'Deleting' : 'Delete'}
        </button>
    </li>
    );
};

export default ContactListItem;