import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsOperations from "../redux/contacts/contacts-operations";
import { getLoading } from "../redux/contacts/contacts-selectors";

import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import FilterContact from "components/FilterContact/FilterContact";

export default function ContactsView() {
    const dispatch = useDispatch();
    const isLoadingContacts = useSelector(getLoading);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    return (
        <>
            <div>
                <h2>Add new contact</h2>
                <ContactForm />
            </div>

            {isLoadingContacts && <h1>Loading</h1>}
            
            <div>
                <h3>Find contact by name</h3>
                <FilterContact />
                <ContactList />
            </div>
        </>
    );
}