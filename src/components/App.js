import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import FilterContact from "./FilterContact/FilterContact";


export const App = () => {
  return (
    <div className="Phonebook__container">
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <FilterContact title="Find contact by name" />
      <ContactList />
    </div>
  );
};