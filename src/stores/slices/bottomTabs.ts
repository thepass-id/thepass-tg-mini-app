import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {BottomTabs} from '../../enums/bottomTabs';

export interface BottomTabsState {
  activeTab: BottomTabs;
}

const initialState: BottomTabsState = {
  activeTab: BottomTabs.Home,
};

export const bottomTabsSlice = createSlice({
  name: 'loginPageSlice',
  initialState,
  reducers: {
    setActiveTab: (state, {payload}: PayloadAction<BottomTabs>) => {
      state.activeTab = payload;
    },
  },
});

export const {setActiveTab} = bottomTabsSlice.actions;

export const bottomTabs = bottomTabsSlice.reducer;
