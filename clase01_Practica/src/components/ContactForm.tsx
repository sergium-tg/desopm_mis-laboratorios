// src/ContactForm.jsx
import { useState } from 'react';

interface Contact {
  name: string;
  phone: string;
}

interface ContactFormProps {
  onAddContact: (contact: Contact) => void;
}

function ContactForm({ onAddContact }: ContactFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    if (name.trim() === '' || phone.trim() === '') return;
    onAddContact({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      
      <input
        type="tel"
        placeholder="Teléfono"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button type="submit"> Crear CONTACTO </button>
    </form>
  );
}

export default ContactForm;