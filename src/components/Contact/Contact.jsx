import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

const Contact = ({ contact, onDeleteContact }) => {
  const handleDeleteContact = () => {
    onDeleteContact(contact.id);
  };
  return (
    <li className={css.listItem}>
      <div className={css.contactItem}>
        <p className={css.contactIcon}>
          <BsFillPersonFill /> {contact.name}
        </p>
        <p className={css.contactIcon}>
          <FaPhone /> {contact.number}
        </p>
      </div>
      <div className={css.contactBtn}>
        <button className={css.btn} onClick={handleDeleteContact}>
          Delete
        </button>
      </div>
    </li>
  );
};

export default Contact;
