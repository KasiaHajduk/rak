import React, {useEffect} from 'react';
import './App.css';
import PhonebookList from './components/PhoneBook/PhonebookList/PhonebookList';
import PhonebookEditor from './components/PhoneBook/PhonebookEditor/PhonebookEditor';
import PhonebookFilter from './components/PhoneBook/PhonebookFilter/PhonebookFilter';
import { useDispatch } from "react-redux";
import { fetchContacts } from "./services/api";

function App () {
  const dispatch = useDispatch();
  useEffect(() => { dispatch(fetchContacts()); }, []);

  return (
      <div>
          <h1>Phonebook</h1>
          <PhonebookEditor /> 
          <h2>Contacts</h2>
          <PhonebookFilter />
          <PhonebookList />
          
      </div>
  );
}

export default App;


