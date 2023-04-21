export const ContactList = ({contacts, delContact}) => {
   return (
      <ul>
         {contacts.map(contact => {
            return(
               <li key={contact.id}>
                  <span>{contact.name}: </span>
                  <span>{contact.number}</span>
                  <button type="button" onClick={()=>{delContact(contact.id);}} >Delete</button>
               </li>
            );
         })}        
      </ul>
   );
};