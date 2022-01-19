import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import store from "../../redux/index";
import s from "../ContactList/ContactList.module.css";

export const ContactList = ({ contacts, deleteContact }) => {
  const items = useSelector((state) => state.items);
  console.log("state", items);
  return (
    <section className={s.contactList}>
      <ul className={s.list}>
        {items.map((item) => (
          <li className={s.item} key={item.id}>
            <p className={s.name}>{item.name}:</p>
            <p className={s.number}>{item.number}</p>
            <button className={s.button} type="button" onClick={() => deleteContact(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

ContactList.propTypes = {
  updatedContacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
