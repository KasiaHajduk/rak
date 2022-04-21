import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../features/contact/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
