import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import contactsOperations from "../redux/contacts/contacts-operations";
import { getLoading } from "../redux/contacts/contacts-selectors";

import ContactForm from "components/ContactForm/ContactForm";
import ContactList from "components/ContactList/ContactList";
import FilterContact from "components/FilterContact/FilterContact";

import s from "./ContactsView.module.css";

export default function ContactsView() {
    const dispatch = useDispatch();
    const isLoadingContacts = useSelector(getLoading);

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts());
    }, [dispatch]);

    return (
        <div className={s.container}>
            <div className={s.addContactsPage}>
                <h2 className={s.addContactsTitle}>Add new contact</h2>
                <ContactForm />
            </div>

            {isLoadingContacts && <h1 className={s.loading}>Loading...</h1>}
            
            <div className={s.filter}>
                <h3 className={s.filterTitle}>Find contact by name</h3>
                <FilterContact />
                <ContactList />
            </div>
        </div>
    );
}