import { createSelector } from '@reduxjs/toolkit';

export const selectContactItems = state => {
  const { items } = state.phonebook.contacts;
  return items;
};

export const selectContactLoading = state => {
  const { isLoading } = state.phonebook.contacts;
  return isLoading;
};

export const selectContactError = state => {
  const { error } = state.phonebook.contacts;
  return error;
};

export const selectFilter = state => {
  const { filter } = state.phonebook;
  return filter;
};

export const selectVisibleContacts = createSelector(
  [selectContactItems, selectFilter],
  (items, filter) => {
    return items.filter(item =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
