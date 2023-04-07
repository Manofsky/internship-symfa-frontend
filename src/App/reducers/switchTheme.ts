import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'
import { RootState } from '../store';

export const switchTheme = createSlice({
  name: 'switchTheme',
  initialState,
  reducers: {
    changeTheme: (state) => {
      state.theme = (state.theme === 'light') ? 'dark' : 'light';
      localStorage.theme = state.theme;
    },
  },
})

export const { changeTheme } = switchTheme.actions;

export const selectTheme = (state: RootState) => state.switchTheme.theme;

export default switchTheme.reducer;