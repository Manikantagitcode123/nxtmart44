import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const EmptyCartView = () => (
  <div className="cart-empty-view-container">
    <img
      src="https://res.cloudinary.com/dzjxowhgb/image/upload/v1713614417/vw77z77u0lewgef8tpag.png"
      className="cart-empty-img"
      alt="empty cart"
    />
    <h2>Your cart is empty</h2>
  </div>
)

export default EmptyCartView
