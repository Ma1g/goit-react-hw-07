import css from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);
  
  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact data={contact}/>
        </li>
      ))}
    </ul>
  );
}

