import type { Contact } from "../types/Contacts";
import ContactItem from "./ContactItem";

interface Props{
    contacts: Contact[];
    onDeleteContact: (id: number) => void;
}

function ContactList({contacts, onDeleteContact}: Props){
    if (contacts.length === 0){
        return(<>
            <p>Al momento no hay registrado ningun contacto</p>
        </>)
    }

    return(<>
        <ul>
            {contacts.map(c => (
                <ContactItem
                    key={c.id}
                    contact={c}
                    onDelete={onDeleteContact} />))
            }
        </ul>
    </>)
}

export default ContactList