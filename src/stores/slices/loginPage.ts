import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface LoginPageState {
  isSubmitting: boolean;
}

const initialState: LoginPageState = {
  isSubmitting: false,
};

export const loginPageSlice = createSlice({
  name: 'loginPageSlice',
  initialState,
  reducers: {
    toggleSubmit: (state, {payload}: PayloadAction<boolean>) => {
      state.isSubmitting = payload;
    },
  },
});

export const {toggleSubmit} = loginPageSlice.actions;

export const loginPage = loginPageSlice.reducer;
