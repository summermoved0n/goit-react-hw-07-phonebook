import axios from 'axios';

axios.defaults.baseURL = 'https://65af17ad2f26c3f2139a250e.mockapi.io';

export async function getContacts() {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
}

export async function postContacts(postData) {
  const { data } = await axios.post('/contacts', postData);
  console.log(data);
  return data;
}

export async function deleteContacts(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  console.log(data);
  return data;
}
