import React from 'react'
import './Product.css'
import { Link } from 'react-router-dom'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'
import ReactStars from 'react-rating-stars-component'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../Redux/Action'

const Product = ({
  id,
  title,
  image,
  price,
  rating,
  specification,
  detail,
}) => {
  const dispatch = useDispatch()

  const onAddItemToBasket = () => {
    // console.log(title)
    const item = {
      id,
      title,
      image,
      price,
      rating,
      specification,
      detail,
    }
    dispatch(addToBasket(item))
  }

  return (
    <div className='product'>
      <div className='info'>
        <Link to={`/product/${id}`} className='title'>
          <p>{title}</p>
        </Link>
        <p className='price'>
          <strong>$</strong>
          <strong>{price}</strong>
        </p>
        <div className='rating'>
          <ReactStars
            count={5}
            value={rating}
            size={24}
            activeColor='#ffd700'
          />
          ,
        </div>
      </div>
      <img src={image} alt='' />
      <button onClick={onAddItemToBasket}>
        <i>
          <ShoppingCartOutlined />
        </i>
        Add to Basket
      </button>
    </div>
  )
}

export default Product
