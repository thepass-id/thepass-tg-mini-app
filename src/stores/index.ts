import {configureStore} from '@reduxjs/toolkit';

import {addProof, bottomTabs, loginPage} from './slices';

export const store = configureStore({
  reducer: {loginPage, addProof, bottomTabs},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
