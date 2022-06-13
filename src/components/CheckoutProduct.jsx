import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from '../StateProvider';

const CheckoutProduct = ({id,title,image,price,rating}) => {

    const [{basket},dispatch]=useStateValue();

    // remove item from basket
    const removeFromBasket=()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,

        })

    }

  return (
    <div className='checkoutProduct'>
         <img className='CheckoutProduct__image' src={image} alt={title} />
         <div className='CheckoutProduct__info'>
             <p className='CheckoutProduct__title'>{title}</p>
             <p className='CheckoutProduct__price'>
                 <small>Nu </small>
                 <strong>{price}</strong>
             </p>
             <div className='checkoutProduct__rating'>
                 {
                     Array(rating).fill().map((_,i)=>(
                         <p>⭐</p>
                     ))
                 }
             </div>
             <button onClick={removeFromBasket} className='CheckoutProduct__button'>Remove From Basket</button>
         </div>
    </div>
  )
}

export default CheckoutProduct