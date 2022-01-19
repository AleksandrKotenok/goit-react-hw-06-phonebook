import AddForm from "../AddForm/AddForm";
import Filter from "../Filter/Filter";
import { ContactList } from "../ContactList/ContactList";

import store from "../../redux/index";

export default function App() {
  // console.log("store", store);
  console.log("store.getState()", store.getState());
  //console.log('store.dispatch({ type: "ADD" })', store.dispatch({ type: "ADD" }));

  // const [filter, setFilter] = useState("");
  // const [contacts, setContacts] = useState(() => JSON.parse(window.localStorage.getItem("contacts")) ?? []);

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const submit = ({ name, number }) => {
  //   if (contacts.find((contact) => contact.name === name)) {
  //     alert(`${name} existing name`);
  //     return;
  //   }
  //   const newRecord = {
  //     id: nanoid(),
  //     name,
  //     number,
  //   };
  //   setContacts([newRecord, ...contacts]);
  // };
  //const filterContacts = () => contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  //const deleteContact = (contactId) => setContacts(contacts.filter((contact) => contact.id !== contactId));
  // const filterChange = (e) => setFilter(e.currentTarget.value);
  // const filteredContacts = filterContacts();
  return (
    <>
      <h1>Phonebook</h1>
      <AddForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
//input={filterChange}
//contacts={filteredContacts} deleteContact={deleteContact}
