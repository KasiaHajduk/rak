import styles from './PhonebookFilter.module.css';

import { useDispatch } from 'react-redux';
import { onFilter } from '../../../features/contact/contactsSlice';



export default function PhonebookFilter() {
    const dispatch = useDispatch();
    const onChange = event => {
        dispatch(onFilter(event.target.value));
    }

    return (
        <label className={styles.pbfilter}>
            Find contacts by name
            <input className={styles.pbfilter__input} type="text" onChange={onChange} />
        </label>
    );
}
