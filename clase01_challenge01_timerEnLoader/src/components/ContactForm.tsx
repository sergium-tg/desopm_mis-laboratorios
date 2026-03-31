import { useState } from "react";
import type { Contact } from "../types/Contacts";

interface Props{
    onAddContact: (contact: Contact) => void
}

function ContactForm({ onAddContact }: Props){
    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();

        if(id === 0 || name.trim() === '' || phone.trim() === '') return;
        const newContact: Contact = { id, name, phone };
        onAddContact(newContact)
        setId(0)
        setName('')
        setPhone('')
    }
    return(<>
        <form onSubmit={handleSubmit}>
            <input
                type="number"
                placeholder="Digitar ID"
                value={id}
                onChange={(e) => setId(Number(e.target.value))}
            />
            <input
                type="text"
                placeholder="Digitar nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Digitar telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}            
            />

            <button type="submit">Registrar CONTACTO</button>
        </form>
    </>)
}

export default ContactForm;