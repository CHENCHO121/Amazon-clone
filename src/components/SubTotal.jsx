import React from 'react';
import './SubTotal.css';
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../reducer';
import { useStateValue } from '../StateProvider';
import {useNavigate} from 'react-router-dom';

const SubTotal = () => {

  const [{basket},dispatch]=useStateValue();
  const navigate=useNavigate()

  return (
    <div className='subtotal'>
       <CurrencyFormat
            renderText={(value)=>(
            <>
                <p>
                    Subtotal ({basket.length}  items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> This order contain gift
                </small>
            </>
            )}

            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={'text'}
            thousandSeparator={true}
            prefix={"Nu "}

       />
       <button onClick={e=>navigate('/payment')}>Procced To Checkout</button>
    </div>
  )
}

export default SubTotal