// import { Component } from 'react';
import PropTypes from 'prop-types'

export const Filter = ({filter, onChangeInput}) => {
   return (
      <>
         <label>Find contacts by name
            <input type="text" name='filter' value={filter}           
               onChange={onChangeInput}//f() змінить State.filter в App
            />
         </label>         
      </>
   ); 
} 

Filter.propTypes = {
   filter: PropTypes.string.isRequired,
   onChangeInput: PropTypes.func.isRequired //f дані з інпут в State
};

// export class Filter extends Component {
//    state = {
//       contacts: [],
//       filter: '',
//       name: '',
//       number: ''
//    }

//    onChangeFilter = (e) => {
//       console.log("Працює onChangeFilter");
//       this.setState({
//          filter: e.target.value
//       })
//    }
//    render() {
//       return (
//          <div>
//             <p>Find contacts by name</p>
//                <input type="text" value={this.state.filter}
                 
//                  //подія в інпуті
//                   onChange={e => { 
//                      console.log("Працю onChange");
//                      // До контактів фі

//                      return (this.setState({ filter: e.target.value }))}
//                   }
//             />
            
//          </div>
//       );
//    }
// } 

// onChange={e => this.setState({ name: e.target.value })}