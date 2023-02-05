import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';
import { List, Error } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contacts/contactsSliceApi';
import { getFilter } from 'redux/contacts/selectors';


const ContactList = () => {
  const { data: contacts, error, isLoading } = useFetchContactsQuery();

  const filter = useSelector(getFilter);

  const filterContacts = () => {
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const contactList = filterContacts();
  const renderContacts = contacts && !isLoading && contactList.length > 0;

  return (
    <List>
      {renderContacts &&
        contactList.map(({ id, name, number }) => (
          <ContactItem id={id} key={id} name={name} number={number} />
        ))}
      {isLoading && <Loader />}
      {error && (
        <Error>Try adding phone details or contact your administrator</Error>
      )}
    </List>
  );
};

export default ContactList;

