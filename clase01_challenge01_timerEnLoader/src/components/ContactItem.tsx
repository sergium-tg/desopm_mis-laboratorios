import type { Contact } from "../types/Contacts";

interface Props{
    contact: Contact
    onDelete: (id: number) => void
}

function ContactItem({ contact, onDelete }: Props){
    return(<>
        <li>
            {contact.id} | Nombre: {contact.name} | telefono: {contact.phone}
            <button onClick={() => onDelete(contact.id)}>Eliminar</button>    
        </li>
    </>)
}

export default ContactItem