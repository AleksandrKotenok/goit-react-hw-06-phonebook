import store from "../../redux/index";
import { useSelector } from "react-redux";

import s from "../ContactList/ContactList.module.css";

export const ContactList = () => {
  const items = useSelector((state) => state.contactReducer.items.filter(({ name }) => name.toLowerCase().includes(state.contactReducer.filter.toLowerCase())));
  return (
    <section className={s.contactList}>
      <ul className={s.list}>
        {items.map((item) => (
          <li className={s.item} key={item.id}>
            <p className={s.name}>{item.name}:</p>
            <p className={s.number}>{item.number}</p>
            <button
              className={s.button}
              type="button"
              onClick={(e) => {
                e.preventDefault();
                store.dispatch({ type: "DEL", payload: item.id });
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
