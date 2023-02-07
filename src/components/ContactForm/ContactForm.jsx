import { useState } from 'react';
import { Form, Label, Button, Title, Input } from './ContactForm.styled';
import { toast } from 'react-toastify';
import { useFetchContactsQuery, useCreateContactMutation } from 'redux/contacts/contactsSliceApi';
// import TextField from '@mui/material/TextField';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const { data: contacts } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const handleChange = evt => {
    const { value } = evt.currentTarget;

    evt.currentTarget.name === 'name' ? setName(value) : setNumber(value);
  };

  const addContact = data => {
    const contactName = contacts.map(contact => contact.name.toLowerCase());
    const isAdding = contactName.includes(data.name.toLowerCase());

    if (!isAdding) {
      createContact(data);
      reset();
      toast.success(`Contact, ${name} successfully added`);
    } else {
      toast.error(`${data.name} is already in contacts.`);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    const contact = {
      name,
      number,
    };

    addContact(contact);
  };

  // очистка инпутов
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>My Phonebook</Title>
      
      <Label>
        Name
        <Input
          type="text"
          name="name"
          placeholder="Enter name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          required
        />
      </Label>
      <Label>
        Phone
        <Input
          type="tel"
          name="phone"
          placeholder="Phone number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          required
        />
      </Label>
      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export default ContactForm;



// import { useState } from 'react';
// import { Form, Label, Title } from './ContactForm.styled';
// import { toast } from 'react-toastify';
// import { useFetchContactsQuery, useCreateContactMutation } from 'redux/contacts/contactsSliceApi';
// import { Button, TextField } from "@mui/material";


// export const ContactForm = () => {
//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const { data: contacts } = useFetchContactsQuery();
//   const [createContact] = useCreateContactMutation();

//   const handleChange = evt => {
//     const { value } = evt.currentTarget;

//     evt.currentTarget.name === 'name' ? setName(value) : setNumber(value);
//   };

//   const addContact = data => {
//     const contactName = contacts.map(contact => contact.name.toLowerCase());
//     const isAdding = contactName.includes(data.name.toLowerCase());

//     if (!isAdding) {
//       createContact(data);
//       reset();
//       toast.success(`Contact, ${name} successfully added`);
//     } else {
//       toast.error(`${data.name} is already in contacts.`);
//     }
//   };

//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const contact = {
//       name,
//       number,
//     };

//     addContact(contact);
//   };

//   // очистка инпутов
//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Title>My Phonebook</Title>
      
//          <Label>
//         <TextField
//           id="outlined-basic"
//           variant="outlined"
//           size="small"
//           type="text"
//           name="name"
//           label="Enter name"
//           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//           value={name}
//           onChange={handleChange}
//           required
//         />
//       </Label>
//       <Label>
//         <TextField
//           id="outlined-basic"
//           variant="outlined"
//           size="small"
//           type="tel"
//           name="number"
//           label="Phone number"
//           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//           value={number}
//           onChange={handleChange}
//           required
//         />
//       </Label>
//       <Button type="submit">Add contact</Button>
//     </Form>
//   );
// };

// export default ContactForm;


  //  <TextField
  //                       label="Email"
  //                                    type="email"
  //                       name="email"
  //                       value={email}
  //                       onChange={handleChange}
  //                       placeholder="example@mail.com"
  //                       required
  //                       id="outlined-basic"
  //                       variant="outlined"
  //                       size="small"
  //                   />