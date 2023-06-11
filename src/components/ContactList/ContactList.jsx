import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './styled';

const getFilteredContacts = (contacts, filter) =>
  !filter
    ? contacts
    : contacts.filter(contact => contact.name.toLowerCase().includes(filter));

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getFilteredContacts(contacts, filter);

  return (
    <List>
      {visibleContacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </List>
  );
};

