import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import css from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContactItems, selectContactLoading } from '../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contactsOperations';
import { Spinner } from './Spinner/Spinner';
import toast, { Toaster } from 'react-hot-toast';

export default function App() {
  const contacts = useSelector(selectContactItems);
  const isLoading = useSelector(selectContactLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .unwrap()
      .then(() => {
        toast.success('Your contacts were successfully fetched!');
      })
      .catch(() => {
        toast.success('Oops, something went wrong!');
      });
  }, [dispatch]);

  return (
    <>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
      <div className={css.app_conteiner}>
        <h1 className={css.app_title}>Phonebook</h1>
        <ContactForm />
        <h2 className={css.app_subtitle}>Contacts</h2>
        <Filter />
        {isLoading && <Spinner />}
        {contacts.length === 0 && !isLoading && (
          <p className={css.app_text}>Your contacts list is empty.</p>
        )}
        {contacts.length > 0 && !isLoading && <ContactList />}
      </div>
    </>
  );
}
