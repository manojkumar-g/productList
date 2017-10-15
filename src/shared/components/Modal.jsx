import React from 'react';
import {connect} from 'react-redux'
import {closeAlert,addItem} from '../actions'

let styles = {
  width: '500px',
  height: '350px',
  opacity: 1
}

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      rate:'',
      quality:''
    }
  }
  onChange = ({target:{name,value}}) =>{
    debugger;
    if(name == 'quality' && (value >3 || value <1) )
      return;
    this.setState({[name]:value})
  }
  render(){
    return (
      <main className = 'modal' style = {this.props.isOpen ? styles:{}} >
        <h2>Name </h2>
        <input type='text'
          className = 'login-input'
          value = {this.state.name}
          onChange = {this.onChange}
          name = 'name'
         />

         <div className = 'modal-row'>
         <h2 className ='model-second'>Quality </h2>
         <input type='number'
           className = 'login-input model-second'
           name = 'quality'
           value = {this.state.quality}
           onChange = {this.onChange}
          />
          <h2 className ='model-second'>Rate </h2>
          <input type='number'
            className = 'login-input model-second'
            name = 'rate'
            value = {this.state.rate}
            onChange = {this.onChange}

           />
           </div>
           <button
             className = 'login-button-two'
             onClick = {this.props.closeAlert}

             >Cancel</button>
           <button
             className = 'login-button-two'
             onClick = {this.props.addItem.bind(null,this.state.name,this.state.rate,this.state.quality)}
             >Save</button>

               </main>
    )
  }
}




export default connect(
  ({showAlert,alertMsg}) => ({isOpen:showAlert,message:alertMsg}),
  {closeAlert,addItem}
)(Modal)
