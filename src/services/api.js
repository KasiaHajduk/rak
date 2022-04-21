import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://62547a0019bc53e2347f18bb.mockapi.io/";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async () => {
    try {
      const { data } = await axios.get(`${baseURL}/contacts`);
      return data;
    } catch (error) {
      return console.error(error);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (contact) => {
    try {
      const { data } = await axios.post(`${baseURL}/contacts`, contact);
      return data;
    } catch (error) {
      return console.error(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id) => {
    await axios.delete(`${baseURL}/contacts/${id}`);
    try {
      const { data } = await axios.get(`${baseURL}/contacts`);
      return data;
    } catch (error) {
      return console.error(error);
    }
  }
);
 