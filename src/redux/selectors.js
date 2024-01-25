// import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => {
  const { items } = state.phonebook.contacts;
  return items;
};

export const getFilter = state => {
  const { filter } = state.phonebook;
  return filter;
};

// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
// );
