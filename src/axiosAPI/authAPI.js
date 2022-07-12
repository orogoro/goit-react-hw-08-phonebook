import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

async function register(credentials) {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function login(credentials) {
  try {
    const { data } = await axios.post('/users/login', credentials);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { register, login };

// export const fetchContacts = createAsyncThunk(
//   'contact/fechContact',
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.get('/contacts');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contact/contactDelete',
//   async (id, { rejectWithValue }) => {
//     try {
//       const { data } = await axios.delete(`/contacts/${id}`);
//       Notiflix.Notify.success('Контакт успешно удален');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

// export const addContact = createAsyncThunk(
//   'contact/contactAdd',
//   async ({ name, phone }, { rejectWithValue }) => {
//     const contact = {
//       name,
//       phone,
//     };

//     try {
//       const { data } = await axios.post('/contacts', contact);
//       Notiflix.Notify.success('Контакт успешно добавлен');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );
