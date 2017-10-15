import React from 'react'
import Item from './Item.jsx'

const Cart = ({items}) =>
  <article className = 'list'>
    <div className = 'list-row'>
      <span className = 'item'>Items({items.length})</span>
      <span className = 'quantity'>Qty</span>
      <span className = 'price'>Price</span>
    </div>
    <div className = 'list-row bottomline'>
    </div>
    <ul className = 'item-list'>
      {

        items.map(
          (item) => <Item key = {item.id} {...item}/>

        )
      }
    </ul>
  </article>

export default Cart;
