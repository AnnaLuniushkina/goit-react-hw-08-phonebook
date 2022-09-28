import { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import contactsOperations from 'redux/contacts/contacts-operations';
import { getContacts } from 'redux/contacts/contacts-selectors';
import styles from './ContactForm.module.css';

export default function ContactForm() {
    const  [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);

    const handleChange = event => {  
        switch (event.currentTarget.name) {
            case 'name':
                setName(event.currentTarget.value);
                break;
            case 'number':
                setNumber(event.currentTarget.value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (
            contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contact`);
        } else if (contacts.find(contact => contact.number === number)) {
            alert(`${number} is already in contact`);
        } else {
            dispatch(contactsOperations.addContact({ name, number }));
            setName('');
            setNumber('');
        }
    };

    return (
            <form
                className={styles.contactForm}
                onSubmit={handleSubmit}>
                <label
                    className={styles.contactForm__label} >
                    Name
                    <input
                        className={styles.contactForm__input}
                        value={name}
                        onChange={handleChange}
                        type='text'
                        name='name'
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required />
                    </label>
                
                    <label
                        className={styles.contactForm__label}>
                        Number
                        <input
                            className={styles.contactForm__input}
                            value={number}
                            onChange={handleChange}
                            type="tel"
                            name="number"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
        
                    <button type="submit" className={styles.contactForm__button}>Add contact</button>
                </form>
        );
};