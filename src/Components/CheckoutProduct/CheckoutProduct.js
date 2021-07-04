import React from 'react'
import { useDispatch } from 'react-redux'
import './CheckoutProduct.css'
import ReactStars from 'react-rating-stars-component'
import { removeFromBasket } from '../../Redux/Action'

import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'

const CheckoutProduct = ({ id, title, image, rating, price }) => {
  let dispatch = useDispatch()
  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(id))
  }
  return (
    <div className='checkout-product'>
      <img src={image} alt='' className='checkout-product-image' />
      <div className='checkout-product-info'>
        <p className='checkout-product-title'>{title}</p>
        <p className='checkout-product-price'>
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className='checkout-product-rating'>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            activeColor='#ffd700'
          />
        </div>
        <button onClick={removeItemFromBasket}>
          <i>
            <ShoppingCartOutlined />
          </i>
          Remove from Basket
        </button>
      </div>
    </div>
  )
}

export default CheckoutProduct
