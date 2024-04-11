import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import
{
  fetchUsers,
  createUsers,
  updateUsers,
} from "../../../api/users";

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
  reducers: {
    deleteUser: (state, action) => {
      state.users = state.users.filter((_, idx) => idx !== action.payload.index);
    }
  },
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
        state.error = error.message
      })
  }
});

export const selectUsers = state => state.users;
export const selectPostUsers = state => state.users;
export const { deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
