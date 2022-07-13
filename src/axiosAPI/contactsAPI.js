import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

async function contacts() {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function createContact(credentials) {
  try {
    const { data } = await axios.post('/contacts', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function deleteContact(id) {
  try {
    await axios.delete(`/contacts/${id}`);
  } catch (error) {
    console.log(error);
  }
}

export { contacts, createContact, deleteContact };
