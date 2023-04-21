import { Component } from 'react';

export class Filter extends Component {
   state = {
      contacts: [],
      filter: '',
      name: '',
      number: ''
   }

   onChangeFilter = (e) => {
      console.log("Працює onChangeFilter");
      this.setState({
         filter: e.target.value
      })
   }
   render() {
      return (
         <div>
            <p>Find contacts by name</p>
               <input type="text" value={this.state.filter}
                 
                 //подія в інпуті
                  onChange={e => { 
                     console.log("Працю onChange");
                     // До контактів фі

                     return (this.setState({ filter: e.target.value }))}
                  }
            />
            
         </div>
      );
   }
} 

// onChange={e => this.setState({ name: e.target.value })}