import React from 'react'
import './SingleProduct.css'
import { useParams } from 'react-router'
import { products } from '../../utils/ProductsData'
import ReactStars from 'react-rating-stars-component'
import ShoppingCartOutlined from '@material-ui/icons/ShoppingCartOutlined'
import { useDispatch } from 'react-redux'
import { addToBasket } from '../../Redux/Action'

const SingleProduct = () => {
  let { id } = useParams()
  let singleProduct = products.find((item) => item.id === id)

  let dispatch = useDispatch()

  const addItemtoBasket = () => {
    const item = {
      id: singleProduct.id,
      rating: singleProduct.rating,
      title: singleProduct.title,
      price: singleProduct.price,
      image: singleProduct.image,
      specification: singleProduct.specification,
      detail: singleProduct.detail,
    }
    dispatch(addToBasket(item))
  }

  return (
    <div className='singleproduct-container'>
      <div className='  '>
        <div className='single-product'>
          <img
            src={singleProduct.image}
            className='single-product-image'
            alt=''
          />

          <div className='single-product-info'>
            <div className='single-product-title'>{singleProduct.title}</div>
            <div className='single-product-rating'>
              <ReactStars
                count={5}
                value={singleProduct.rating}
                size={24}
                activeColor='#ffd700'
              />
            </div>

            <p className='single-product-price'>
              Price:<strong>$</strong>
              <strong>{singleProduct.price}</strong>
            </p>
            <div className='single-product-specification'>
              <h4>Specification</h4>
              {singleProduct.specification &&
                singleProduct.specification.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
            </div>
            <div className='single-product-description'>
              <h4>Product Description</h4>
              <p>{singleProduct.detail}</p>
            </div>
            <button onClick={addItemtoBasket}>
              <i>
                <ShoppingCartOutlined />
              </i>
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProduct
