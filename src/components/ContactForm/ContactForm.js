import { useState } from 'react'; 
import { useCreateContactMutation, useFetchContactsQuery } from 'redux/api';
import styles from './ContactForm.module.css';

function ContactForm() {
    const  [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const [createContact] = useCreateContactMutation();
    const { data } = useFetchContactsQuery();

    const handleChange = event => {  
        switch (event.target.name) {
            case 'name':
                setName(event.target.value);
                break;

            case 'phone':
                setPhone(event.target.value);
                break;
            
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (
            data?.find(contact => contact.name.toLowerCase() === name.toLowerCase())) {
            alert(`${name} is already in contact`);
        } else if (data.find(contact => contact.phone === phone)) {
            alert(`${phone} is already in contact`);
        } else {
            createContact({ name, phone });
        }

        setName('');
        setPhone('');

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
                            value={phone}
                            onChange={handleChange}
                            type="tel"
                            name="phone"
                            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                            required
                        />
                    </label>
        
                    <button type="submit" className={styles.contactForm__button}>Add contact</button>
                </form>
        );
};

export default ContactForm;