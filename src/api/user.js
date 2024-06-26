import axios from 'axios';

const URL = `${import.meta.env.VITE_BASE_URL}`;

const config = {
  headers:{
    Authorization: `Bearer ${localStorage.getItem('token')}`
  }
};

export const fetchUsers = async () => {
  try {
    const { data } = await axios.get(`${URL}/user`, config);
    return data;
  } catch(error) {
    console.log(error)
    return []
  }
};

export const getUserByEmail = async (email) => {
  try {
    const { data } = await axios.get(`${URL}/user/${email}`)
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

export const fetchUserByUserName = async (userName) => {
  try {
    const { data } = await axios.get(`${URL}/user/by-user-name/${userName}`);
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};



export const createUsers = async (form) => {
  try {
    const { data } = await axios.post(`${URL}/user`, form);
    return data;
  } catch (error) {
    return error.message;
  }
};


