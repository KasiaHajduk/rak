import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "../../services/api";

const initialState = {
  contacts: [],
  filter: '',
  status: 'idle',
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  
  reducers: {
    onFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: {
    [fetchContacts.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchContacts.fulfilled]: (state, action) => {
      state.contactsList = action.payload;
      state.status = 'idle';
    },
    [addContact.fulfilled]: (state, action) => {
      state.contactsList.push(action.payload);
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.contactsList = action.payload;
    },
  },
});

export const { onFilter } = contactsSlice.actions;

export default contactsSlice.reducer;



