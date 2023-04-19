import { Component } from 'react';
import { FormPhBS } from './FormPhB.styled';

export class FormPhB extends Component {
state = {
  contacts: [

  ],
  filter: '',
  name: 'Вася',
  number: '093'
}
    handleNameChange = e => {
        this.setState({ name: e.currentTarget.value });
     }

    render() {
      return (
    <FormPhBS onSubmit={this.handleNameChange}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
      </label>

      <label>
        Number
        <input
          type="tel"

          value={this.state.number}
          onChange={this.handleNameChange}
        />
      </label>

      <button type="submit">Add contact</button>
    </FormPhBS>
  );
    }
}

//   const [name, setName] = useState('');
//   const [number, setNumber] = useState('');

//   const handleChange = e => {
//     const { name, value } = e.currentTarget;
//     switch (name) {
//       case 'name':
//         // setName(value);
//         break;

//       case 'number':
//         // setNumber(value);
//         break;

//       default:
//         return;
//     }
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onSubmit(name, number);
//     reset();
//   };

//   const reset = () => {
//     setName('');
//     setNumber('');
//   };

    // {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    // {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    // {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    // {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},