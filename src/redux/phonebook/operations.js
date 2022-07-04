import axios from 'axios';
import {
  fetchContactRequest,
  //   fetchContactSuccess,
  //   fetchContactError,
} from './actions';

axios.defaults.baseURL = 'https://62c2bf3d876c4700f52d250d.mockapi.io';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchContactRequest());

  const respons = await axios.get('/contacts');
  console.log(respons);
};
