import React from 'react';
import {connect} from 'react-redux'

import {removeItem,changeQuantity,showAlert} from '../actions'


const Item = (item) =>
<li className = 'list-row'>
  <span className = 'item'>
    <article className = 'item-content'>
      <img className = 'item-img' src = {item.img_url}/>

      <span className = 'item-name'>
        {item.name}
      </span>
      <span className = 'item-remove' onClick = {() =>
        {
          item.showAlert(`${item.name} is Deleted From Cart`)
          item.removeItem(item.id)
        }

      }></span>
    </article>
  </span>
  <span className = 'quantity'>
    <article className = 'quantity-content'>
      <h1
        onClick ={
          () => item.changeQuantity(item.id,item.quantity-1)
        }>
        -
      </h1>
      <input type = 'text'
         value = {item.quantity}
         onChange = {
           e =>{
             if(e.target.value=='')
              return item.changeQuantity(item.id,0)
             isNaN(e.target.value) ? false: item.changeQuantity(item.id,e.target.value)
           }
         }
       />
      <h1
        onClick ={
          () => item.changeQuantity(item.id,item.quantity+1)
        }
        >+</h1>
    </article>

  </span>
  <span className = 'price price-text'>${item.price}</span>
</li>

export default connect(
  ()=>({}),
  {removeItem,changeQuantity,showAlert}
)(Item);
