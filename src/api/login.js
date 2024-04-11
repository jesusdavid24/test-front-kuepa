import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const login = async ({email, password}) => {
  try {
    const { data } = await axios.post(`${URL}/auth`,
    { email, password }, config)

    localStorage.setItem('token', data.token)
    localStorage.setItem('name', data.userLogged.name)
    localStorage.setItem('email', data.userLogged.email)

    return data;

  } catch(error) {
    console.log(error)
    throw new Error('Ocurrio un error')
  }
};

export const activeUser = async (token) => {
  try {
    const { data } = await axios.get(`${URL}/auth/active-account/${token}`, config);
    return data;
  } catch(error) {
    console.log(error)
    return []
  }
}
