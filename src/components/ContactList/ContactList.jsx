import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/contacts-selectors';
import contactsOperations from 'redux/contacts/contacts-operations';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from './ContactList.module.css';

export default function ContactList() {
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);

    const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

    return (
        <ul className={styles.ContactList}>
            {contacts.map(({ id, name, number }) => {
                return (
                    <ContactListItem key={id} contact={{ id, name, number }} onDelete={() => onDeleteContact(id) } />
                );
            })}
        </ul>
    );
};