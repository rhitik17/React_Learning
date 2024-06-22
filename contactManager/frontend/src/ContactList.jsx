// src/ContactList.jsx
import React from 'react';

function ContactList({ contacts, updateContact, deleteContact }) {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact._id}>
          <span>{contact.name} - {contact.phone}</span>
          <button onClick={() => updateContact(contact._id, { ...contact, name: contact.name + ' (Updated)' })}>
            Update
          </button>
          <button onClick={() => deleteContact(contact._id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
