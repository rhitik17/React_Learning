// Example structure of App.jsx
import React from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

function App() {
  return (
    <div>
      <h1>Contacts Management</h1>
      <ContactForm />
      <ContactList />
    </div>
  );
}

export default App;
