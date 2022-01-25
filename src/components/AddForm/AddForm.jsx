import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { getFilteredContacts } from '../../redux/contacts-selectors';
import { addCont } from '../../redux/contacts-actions';

import s from '../AddForm/AddForm.module.css';

export default function AddForm() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setId(nanoid());
    if (name === 'INPUT_NAME') setName(value);
    else if (name === 'INPUT_NUMBER') setNumber(value);
  };
  const submitContact = e => {
    e.preventDefault();
    const checkName = contacts.find(contact => name === contact.name);
    if (checkName) alert(`${name} is already in contacts`);
    dispatch(addCont(id, name, number));
    reset();
  };
  const reset = () => {
    setId('');
    setName('');
    setNumber('');
  };
  return (
    <section className={s.addForm}>
      <form className={s.form}>
        <label className={s.label} htmlFor={'name'}>
          Name:
        </label>
        <input
          id={'name'}
          className={s.input}
          type="text"
          name="INPUT_NAME"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
        <label className={s.label} htmlFor={'tel'}>
          Tel:
        </label>
        <input
          id={'tel'}
          className={s.input}
          type="tel"
          name="INPUT_NUMBER"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
        <button className={s.button} type="submit" onClick={submitContact}>
          Add contact
        </button>
      </form>
    </section>
  );
}
