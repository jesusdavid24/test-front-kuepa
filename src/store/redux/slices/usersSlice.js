import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 
  fetchUsers, 
  fetchUserByUserName,
  createUsers 
} from '../../../api/user';

const initialState = {
  users: [],
  data: {},
  error: null,
  status: 'idle'
};

export const getUsers = createAsyncThunk(
  'user/getUsers',
  async() => {
    const users = await fetchUsers();
    return users
  }
);

export const postUsers = createAsyncThunk(
  'user/postUsers',
  async(form) => {
    const data = await createUsers(form);
    return data;
  }
);

const usersSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.status = 'idle',
        state.users = payload
      })
      .addCase(getUsers.rejected, (state, { error }) => {
        state.status = 'failed',
        state.error = error.message
      })
      .addCase(postUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(postUsers.fulfilled, (state, { payload }) => {
        state.status = 'idle',
        state.data = payload
      })
      .addCase(postUsers.rejected, (state, { error }) => {
        state.status = 'failed',
        state.error = error.message,
        state.userExists = error.message === 'User already exists' // Actualizar el estado userExists si el usuario ya existe
      })
  }
});

export const selectUsers = state => state.users;
export const selectPostUsers = state => state.users;

export default usersSlice.reducer;
