import ContactItem from 'components/ContactItem';
import Loader from 'components/Loader';
import { List, Error } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'redux/contactsSliceApi';
import { getFilter } from 'redux/selectors';


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
        contactList.map(({ id, name, phone }) => (
          <ContactItem id={id} key={id} name={name} number={phone} />
        ))}
      {isLoading && <Loader />}
      {error && (
        <Error>Try adding phone details or contact your administrator</Error>
      )}
    </List>
  );
};

export default ContactList;