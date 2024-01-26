import * as contactsAPI from '../services/api-service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contucts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const contucts = await contactsAPI.getFetchContacts();
      console.log(contucts);
      return contucts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postContact = createAsyncThunk(
  'contucts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const contucts = await contactsAPI.postFetchContact(contact);
      console.log(contucts);
      return contucts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contucts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      console.log(id);
      const contucts = await contactsAPI.deleteFetchContact(id);
      console.log(contucts);
      return contucts.id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
