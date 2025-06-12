import { createSlice } from '@reduxjs/toolkit';

type ThemeType = 'dark' | 'light';

export interface ThemeState {
  activeTheme: ThemeType;
}

const initialState: ThemeState = {
  activeTheme: (localStorage.getItem('theme') as ThemeType) || 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState: initialState,
  reducers: {
    toggleTheme: state => {
      state.activeTheme = state.activeTheme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('theme', state.activeTheme);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice;
