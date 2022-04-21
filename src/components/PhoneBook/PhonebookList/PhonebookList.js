import styles from './PhonebookList.module.css';
import PhonebookElement from './PhonebookElement';
import { useSelector } from 'react-redux';

export default function PhonebookList () {
  const contacts = useSelector((state) => state.contacts);
  const { contactsList, status, filter } = contacts;
  const normalizedFilter = filter.toLowerCase().trim();
  
  const filterContacts = (contactsList) => {
    return contactsList.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  let filteredContacts;

  if (filter === "") { filteredContacts = contactsList;
  } else {filteredContacts = filterContacts(contactsList);}

  return (
    <ul className={styles.pblist}>
      {status==='loading' ? (
        <h2>Loading...</h2>
      ) : (
        filteredContacts?.map(({ id, name, phone }) => (
          <PhonebookElement key={id} id={id} name={name} phone={phone} />
        ))
      )}
    </ul>
  );
};

