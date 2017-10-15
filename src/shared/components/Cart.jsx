import React from 'react';
import { connect } from 'react-redux'
import List from './List.jsx'
import Summary from './Summary.jsx'
import {closeAlert,restoreData} from '../actions'
import Modal from './Modal.jsx'

const Cart = ({items,closeAlert,alertMessage,showAlert,restoreData}) =>{

    let totalPrice =0,totalDiscount =0,totalTypeDiscount=0;
    if(items)
      items.forEach(
        ({price,discount,type,quantity}) => {
          totalPrice += quantity*price;
          totalDiscount += quantity * (price*(discount/100.0))
          if(type == 'fiction')
            totalTypeDiscount += quantity * (price*0.15)
        }
      )


      return <div className="container">
        <Modal close = {closeAlert} message = {alertMessage} isOpen ={showAlert}/>
        <header>
          <span className='back-btn'></span>
          <h1>
          Order Summary
          {items.length == 0 && <button onClick = {restoreData}> Restore</button>}
          
        </h1>
        </header>
        <section>


          <List
            totalItems={items.length}
            items = {items}
          />
          <Summary
            totalItems={items.length}
            totalPrice = {totalPrice}
            totalDiscount = {totalDiscount}
            totalTypeDiscount = {totalTypeDiscount}
          />
        </section>
      </div>
  }




export default connect(
  ({data,alertMessage,showAlert}) => ({items:data,alertMessage,showAlert}),
  {closeAlert,restoreData}
)(Cart);
