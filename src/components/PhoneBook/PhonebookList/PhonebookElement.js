import styles from './PhonebookList.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../services/api';


function PhonebookElement ({ id, name, number }) {
  const dispatch = useDispatch();

  return (
    <li key={id} className={styles.pblist__item}>
      <p className={styles.pblist__text}> * {name} &nbsp;&nbsp;&nbsp;&nbsp; {number}  </p>
      <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </li>
  );
};

PhonebookElement.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.number,
};

export default PhonebookElement;