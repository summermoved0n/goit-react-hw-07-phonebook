import { useDispatch, useSelector } from 'react-redux';
import ContactListItems from '../ContactListItems/ContactListItem';
import css from './ContactList.module.css';
import { removeContact } from '../../redux/contactsOperations';
import { selectVisibleContacts } from '../../redux/selectors';
import toast from 'react-hot-toast';

export default function ContactList() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const deleteContact = id => {
    console.log(id);
    dispatch(removeContact(id));
    const removeName = filteredContacts.find(item => item.id === id);
    console.log(removeName);
    toast(`You deleted '${removeName.name}'!`, {
      icon: '💔',
    });
  };

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactListItems
          key={id}
          id={id}
          name={name}
          number={phone}
          deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
}
