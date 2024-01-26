import axios from 'axios';

axios.defaults.baseURL = 'https://65af17ad2f26c3f2139a250e.mockapi.io';

export async function getFetchContacts() {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
}

export async function postFetchContact(postData) {
  const { data } = await axios.post('/contacts', postData);
  console.log(data);
  return data;
}

export async function deleteFetchContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  console.log(data);
  return data;
}
