import styles from './PhonebookEditor.module.css';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addContact } from '../../../services/api';


export default function PhonebookEditor() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts);
    const { contactsList } = contacts;

    const handleSubmit = event => {
        event.preventDefault();
        const pbForm = event.target;
        const name = event.target.name;
        const phone = event.target.phone;

        for (let contact of contactsList) {
            if (contact.name === name.value) {
              alert(`${name.value} is already on the contacts list`);
              return;
            }
        }

        dispatch(
            addContact({
                id: nanoid(),
                name: name.value,
                phone: phone.value,
            })
        );
        pbForm.reset();
    };

    return (
        <form className={styles.pb__form} onSubmit={handleSubmit}>
            <label className={styles.pb__label}> Name
                <input
                    className="pb__input"
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>

            <label className={styles.pb__label}> Number
                <input
                    className="pb__input"
                    type="tel"
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit" className={styles.pb__add}>
                Add contact
            </button>
        </form>
    );
};