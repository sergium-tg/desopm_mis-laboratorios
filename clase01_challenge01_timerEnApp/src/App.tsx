import { useEffect, useState } from "react"
import Loader from "./components/Loader";
import type { Contact } from './types/Contacts.ts'
import ContactList from "./components/ContactList.tsx";
import ContactForm from "./components/ContactForm.tsx";

const contactosPrueba: Contact[] = [
  {id: 101, name: "Dani", phone: "31831000"},
  {id: 102, name: "Andi", phone: "31053250"}
]

function App() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (newContact: Contact) => {
    setContacts(cts => [...cts, newContact])
  }

  const deleteContact = (id: number) => {
    setContacts(prev => prev.filter(c => c.id !== id))
  }

  useEffect(() =>{
    const temporizador = setTimeout (() => { 
      setContacts(contactosPrueba)
      setLoading(false)
    }, 2000);

    return () => clearTimeout(temporizador);
  }, [])

  if (loading === true){
    return <Loader />
  }

  return (
    <>
      <h1>Mi agenda de Contactos</h1>
      <ContactList contacts={contacts} onDeleteContact={deleteContact} />
      <ContactForm onAddContact={addContact} /> 
    </>
  )
}

export default App