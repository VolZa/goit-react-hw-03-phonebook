import { Component } from 'react';
import { FormPhB } from "components/form/FormPhB";
import { Title } from "components/title/Title";
import { Container } from "./App.styled";
import { GlobalStyle } from "./Global.styled";
import { ContactList } from 'components/contact-list/ContactList';
import { Filter } from 'components/filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: ''
  }

  //обробник подій всих input (за input:name заповнює відповідне значення state, name в input і в state мають бути однакові) 
  onChangeInput = (e) => {
    this.setState({
      [e.currentTarget.name]: e.currentTarget.value
    })
  }
  addContact = ({name, number}) => {
    if (this.state.contacts.some(contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase())) {
      alert(`${name} is already in contacts`)
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, {name, number}]
      }))
      return {contacts: [...this.state.contacts, {name, number}]};}
    };
  
  delContact = (id) => {
    const newContacts = this.state.contacts.filter(contact => contact.id!== id);
    this.setState({contacts: newContacts});
  }

  filterContacts = () => {
    const {contacts, filter} = this.state;
    return contacts.filter(contact => contact.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
  }
  render() {
    return (
      <Container
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
        <GlobalStyle />
        <Title title="Phonebook" />
        <FormPhB addContact={this.addContact}/>
        <Title title="Contacts" />
        <Filter filter={this.state.filter}
          onChangeInput={this.onChangeInput}/>
        <ContactList contacts={this.filterContacts()}
        delContact={this.delContact}/>
        React homework template
      </Container>
    );
  }
};
