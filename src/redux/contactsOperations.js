import * as contactsAPI from '../services/api-service';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contucts/fetchContucts',
  async (_, { rejectWithValue }) => {
    try {
      const contucts = await contactsAPI.getContacts();
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
      const contucts = await contactsAPI.postContacts(contact);
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
      const contucts = await contactsAPI.deleteContacts(id);
      console.log(contucts);
      return contucts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
