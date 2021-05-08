import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ filteredContacts, deleteContact }) => (
  <ul>
    {filteredContacts.map(contact => (
      <ContactListItem
        contact={contact}
        key={contact.id}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);

export default ContactList;

// const ContactList = ({ filteredContacts, deleteContact }) => (
//   <ul>
//     {filteredContacts.map(({ name, number, id }) => (
//       <li key={id}>
//         <p>
//           {name}: {number}
//         </p>
//         <button onClick={() => deleteContact(id)} type="button">
//           Delete
//         </button>
//       </li>
//     ))}
//   </ul>
// );
