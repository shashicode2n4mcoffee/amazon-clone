import React from 'react'
import './Checkout.css'
import { useSelector } from 'react-redux'
import CheckoutProduct from '../../Components/CheckoutProduct/CheckoutProduct'
import Subtotal from '../../Components/Subtotal/Subtotal'

const Checkout = () => {
  const { basket, user } = useSelector((state) => state.data)
  return (
    <div className='checkout'>
      <div className='checkout-right'>
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2>
            {basket.length === 0
              ? 'Your Shopping Basket is Empty'
              : 'Your Shopping Basket'}
          </h2>
          {basket &&
            basket.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>
      </div>
      <div className='checkout-right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
