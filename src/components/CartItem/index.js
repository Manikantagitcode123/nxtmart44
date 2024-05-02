import React from 'react'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {AiFillCloseCircle} from 'react-icons/ai'

import CartContext from '../../context/CartContext'

import './index.css'

const CartItem = props => (
  <CartContext.Consumer>
    {value => {
      const {
        removeCartItem,
        incrementCartItemQuantity,
        decrementCartItemQuantity,
      } = value
      const {cartItemDetails} = props

      const {id, name, weight, quantity, price, image} = cartItemDetails
      const upprice = price.slice(1)
      const totalPrice = upprice * quantity

      const onClickDecrement = () => {
        decrementCartItemQuantity(id)
      }

      const onClickIncrement = () => {
        incrementCartItemQuantity(id)
      }

      const onRemoveCartItem = () => {
        removeCartItem(id)
      }

      return (
        <li className="cart-item" data-testid="cartItem">
          <img className="cart-product-image" src={image} alt={name} />
          <div className="cart-item-details-container">
            <div className="cart-product-title-brand-container">
              <p className="cart-product-title">{name}</p>
              <p className="cart-product-brand" data-testid={weight}>
                {weight}
              </p>
              <p className="cart-item-price">${price}</p>{' '}
              {/* Added dollar sign */}
            </div>
            <div className="cart-quantity-container">
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickDecrement}
                data-testid="decrement-quantity"
              >
                -
              </button>
              <p className="cart-quantity" data-testid="item-quantity">
                {quantity}
              </p>{' '}
              {/* Added data-testid */}
              <button
                type="button"
                className="quantity-controller-button"
                onClick={onClickIncrement}
                data-testid="increment-quantity"
              >
                +
              </button>
            </div>
          </div>
        </li>
      )
    }}
  </CartContext.Consumer>
)

export default CartItem
