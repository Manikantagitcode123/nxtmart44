import React, { useState, useEffect } from 'react';

function CartRoute() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage on component mount
    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCartItems);
  }, []);

  const handleIncrement = index => {
    // Increment quantity of a cart item
    const newCartItems = [...cartItems];
    newCartItems[index].quantity++;
    setCartItems(newCartItems);
    updateLocalStorage(newCartItems);
  };

  const handleDecrement = index => {
    // Decrement quantity of a cart item
    const newCartItems = [...cartItems];
    if (newCartItems[index].quantity > 1) {
      newCartItems[index].quantity--;
      setCartItems(newCartItems);
      updateLocalStorage(newCartItems);
    }
  };

  const updateLocalStorage = items => {
    // Update local storage with new cart items
    localStorage.setItem('cart', JSON.stringify(items));
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div>
          <img src="empty-cart.jpg" alt="empty cart" />
          <h1>Your cart is empty</h1>
        </div>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} data-testid="cartItem">
                <img src={item.imageUrl} alt={item.name} />
                <span>{item.name}</span>
                <p>
                  Quantity:{' '}
                  <span data-testid={`item-quantity-${index}`}>{item.quantity}</span>
                </p>
                <button
                  onClick={() => handleDecrement(index)}
                  data-testid={`decrement-quantity-${index}`}
                >
                  -
                </button>
                <button
                  onClick={() => handleIncrement(index)}
                  data-testid={`increment-quantity-${index}`}
                >
                  +
                </button>
                <p>Price: ${item.price}</p>
              </li>
            ))}
          </ul>
          <h2>Total ({cartItems.length} items) :</h2>
          <p data-testid="total-price">
            Total order cost: $
            {cartItems.reduce(
              (acc, item) => acc + item.price * item.quantity,
              0
            )}
          </p>
          <button>Checkout</button>
        </div>
      )}
    </div>
  );
}

export default CartRoute;
