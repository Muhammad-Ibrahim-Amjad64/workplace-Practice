import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  role: null,
  accestoken: null,
  isValid: false,
  ispayed: false,
  verifiedUser: false,
};

export const userSlice = createSlice({
  name: 'Auths',
  initialState,
  reducers: {
    setUser: (state, payload) => {
      console.log('reducers', payload.payload);
      state.user = payload.payload;
      state.accestoken = payload.payload.token;
      state.role = payload.payload.role;
      state.isValid = true;
    },
    ispay: (state, payload) => {
      state.user.isSubscriptionActive = true;
      state.verifiedUser = true;
    },
    logoutUser: (state, payload) => {
      return initialState;
    },
  },
});

export const {setUser, logoutUser, ispay} = userSlice.actions;

export default userSlice.reducer;
