import { useFetchContactsQuery } from 'redux/api';
import { useSelector } from 'react-redux';
import { getFilter } from 'services/selectors';
import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = () => {
    const filterValue = useSelector(getFilter);
    const { data: contacts, isLoading } = useFetchContactsQuery();

    const renderContactsList = contacts?.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase())
    );

    return (
        <ul>
            {isLoading && <p>Loading...</p>}
            {renderContactsList && renderContactsList.map(({id, name, phone}) => (
                <ContactListItem key={id} id={id} name={name} phone={phone} />
            ))}
        </ul>
    );
};

export default ContactList;