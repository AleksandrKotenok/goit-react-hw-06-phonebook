import { useSelector, useDispatch } from 'react-redux';
import { getFilteredContacts } from '../../redux/contacts-selectors';
import { delCont } from '../../redux/contacts-actions';

import s from '../ContactList/ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(getFilteredContacts);
  const deleteContact = id => dispatch(delCont(id));

  return (
    <section className={s.contactList}>
      <ul className={s.list}>
        {items.map(item => (
          <li className={s.item} key={item.id}>
            <p className={s.name}>{item.name}:</p>
            <p className={s.number}>{item.number}</p>
            <button
              className={s.button}
              type="button"
              onClick={() => deleteContact(item.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
