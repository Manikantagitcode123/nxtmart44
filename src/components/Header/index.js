import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class Header extends Component {
  handleLogout = () => {
    Cookies.remove('jwt_token')
    this.props.history.replace('/login')
  }

  render() {
    return (
      <div className="header">
        <Link to="/" className="header_website_logo">
          <img
            src="https://res.cloudinary.com/dzjxowhgb/image/upload/v1713445237/k1kkhqz707ant6hdvxtp.png"
            alt="website logo"
          />
        </Link>
        <Link to="/" className="header-link">
          Home
        </Link>
        <Link to="/cart" className="header-link">
          Cart
        </Link>
        <button onClick={this.handleLogout} className="logout-button">
          Logout
        </button>
      </div>
    )
  }
}

export default withRouter(Header)
