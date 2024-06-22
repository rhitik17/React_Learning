// src/App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/contacts');
      setContacts(res.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };
  
  const addContact = async (contact) => {
    try {
      const res = await axios.post('http://localhost:5000/api/contacts', contact);
      setContacts([...contacts, res.data]);
    } catch (error) {
      console.error('Error adding contact:', error);
    }
  };
  
  const updateContact = async (id, updatedContact) => {
    try {
      const res = await axios.put(`http://localhost:5000/api/contacts/${id}`, updatedContact);
      setContacts(contacts.map(contact => (contact._id === id ? res.data : contact)));
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };
  
  const deleteContact = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/contacts/${id}`);
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };
  
  return (
    <div className="App">
      <h1>Contact Manager</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        contacts={contacts}
        updateContact={updateContact}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
