import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

async function register(credentials) {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function login(credentials) {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function logOut() {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    console.log(error);
  }
}

export { register, login, logOut };

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
