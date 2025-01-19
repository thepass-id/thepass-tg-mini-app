import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {AddProofMode} from '@pages/home/components/addProofContent/index.api';

export interface AddProofState {
  mode: AddProofMode;
  submitUrl: string;
}

const initialState: AddProofState = {
  mode: AddProofMode.ScanQR,
  submitUrl: '',
};

export const addProofSlice = createSlice({
  name: 'loginPageSlice',
  initialState,
  reducers: {
    setMode: (state, {payload}: PayloadAction<AddProofMode>) => {
      state.mode = payload;
    },
    setSubmitUrl: (state, {payload}: PayloadAction<string>) => {
      state.submitUrl = payload;
    },
  },
});

export const {setMode, setSubmitUrl} = addProofSlice.actions;

export const addProof = addProofSlice.reducer;
