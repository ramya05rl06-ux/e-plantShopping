import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice'; // Adjust path if needed
import './CartItem.css'; // Ensure you add matching stylesheet rules

function CartItem({ onContinueShopping }) {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Helper function to strip '$' sign and convert cost string to a clean number
  const parseCost = (costString) => {
    return parseFloat(costString.replace('$', '')) || 0;
  };

  // 1. Calculates the grand total amount for all items inside the cart
  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => {
      return total + (parseCost(item.cost) * item.quantity);
    }, 0).toFixed(2);
  };

  // 2. Increments item quantity by dispatching updateQuantity action
  const handleIncrement = (item) => {
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  // 3. Decrements item quantity or removes it completely if quantity reaches 0
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // 4. Dispatches removeItem action when user clicks the delete button
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // 5. Calculates subtotal for a single plant line item based on quantity
  const calculateTotalCost = (item) => {
    return (parseCost(item.cost) * item.quantity).toFixed(2);
  };

  // Placeholder checkout action handler
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future development');
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: '#2c3e50', textAlign: 'center', marginBottom: '20px' }}>Your Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="empty-cart-message" style={{ textAlign: 'center', padding: '40px' }}>
          <p style={{ fontSize: '1.2rem', color: '#7f8c8d' }}>Your cart is empty.</p>
          <button className="continue-shopping-btn" onClick={onContinueShopping} style={{ marginTop: '20px' }}>
            Shop Plants Now
          </button>
        </div>
      ) : (
        <div>
          {/* Grand Total Value Banner */}
          <h3 className="total-cart-amount" style={{ textAlign: 'right', color: '#27ae60', marginBottom: '20px' }}>
            Total Cart Amount: ${calculateTotalAmount()}
          </h3>

          {/* Cart Items Grid List */}
          <div className="cart-items-list">
            {cartItems.map((item, index) => (
              <div className="cart-item-card" key={index}>
                <img className="cart-item-image" src={item.image} alt={item.name} />
                
                <div className="cart-item-details">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-cost">Unit Price: {item.cost}</div>
                  
                  {/* Quantity Counter Action Controls */}
                  <div className="cart-item-quantity-controls">
                    <button className="quantity-btn control-btn-minus" onClick={() => handleDecrement(item)}>-</button>
                    <span className="cart-item-quantity-value">{item.quantity}</span>
                    <button className="quantity-btn control-btn-plus" onClick={() => handleIncrement(item)}>+</button>
                  </div>
                  
                  <div className="cart-item-subtotal">Subtotal: ${calculateTotalCost(item)}</div>
                  
                  <button className="cart-item-delete-btn" onClick={() => handleRemove(item)}>
                    Remove Item
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation and Action Bottom Bar */}
          <div className="cart-action-buttons" style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
            <button className="continue-shopping-btn" onClick={onContinueShopping}>
              Continue Shopping
            </button>
            <button className="checkout-btn" onClick={handleCheckoutShopping}>
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartItem;
