import React from 'react';
const Summary = ({totalItems,totalPrice,totalDiscount,totalTypeDiscount}) =>
  <article className = 'summary'>
    <h1>Total</h1>
    <h1>Items({totalItems}) <span>${totalPrice}</span></h1>
    <h1>Discount<span>-${totalDiscount}</span></h1>
    <h1>Type Discount<span>-${totalTypeDiscount}</span></h1>
    <h1 className = 'order'>Order Total <span>${totalPrice - totalTypeDiscount - totalDiscount}</span></h1>

  </article>

export default Summary;
