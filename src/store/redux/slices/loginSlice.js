import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../../api/login';

const email = localStorage.getItem('email');

const initialState = {
  data: {},
  error: '',
  email,
  status: 'idle',
};

export const setLogin = createAsyncThunk('auth/setLogin', async (form) => {
  const data = await login(form);
  return data;
});

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearLogin: (state) => {
      state = initialState;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(setLogin.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(setLogin.fulfilled, (state, { payload: { newUser } }) => {
        (state.status = 'idle'),
          (state.data = newUser),
          (state.email = newUser.email)
      })
      .addCase(setLogin.rejected, (state, { error }) => {
        (state.status = 'failed'), (state.error = error.message);
      });
  },
});

export const authLogin = (state) => state.login;

export const { clearLogin } = loginSlice.actions;

export default loginSlice.reducer;
