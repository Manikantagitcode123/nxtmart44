import './index.css'

import CartContext from '../../context/CartContext'
import {Component} from 'react'
class EachProduct extends Component {
  state = {details: {}, quantity: 1}
  componentDidMount() {
    const {details} = this.props
    this.setState({details})
  }
  render() {
    const {details, quantity} = this.state
    const {id, image, name, price, weight} = details

    return (
      <CartContext.Consumer>
        {value => {
          const {addCartItem} = value
          const onClickAddToCart = () => {
            addCartItem({...details, quantity})
          }
          return (
            <div className="eachprodectbg">
              <img className="eachproductImg" src={image} alt={name} />
              <div className="carddetails">
                <div className="detailscard">
                  <p className="productname">{name}</p>
                  <p className="productweight" data-testid ="active-count">{weight}</p>
                  <p className="productprice">{price}</p>
                  <button
                    type="button"
                    className="productbutton"
                    onClick={onClickAddToCart}
                    data-testid="active-count"
                  >
                    Add
                  </button>
                </div>
                <div></div>
              </div>
            </div>
          )
        }}
      </CartContext.Consumer>
    )

    //console.log(details)
  }
}
export default EachProduct
