import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice'; // Adjust import path if needed
import CartItem from './CartItem';     // Adjust import path if needed
import './ProductList.css';             // Make sure to add matching styles

function ProductList() {
  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();
  
  // Get cart items from Redux store to calculate totals and manage button states
  const cartItems = useSelector(state => state.cart.items);
  
  // Calculate total number of items in the cart for the badge overlay
  const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Plant inventory catalog grouped by categories
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        {
          name: "Snake Plant",
          image: "https://unsplash.com",
          description: "Produces oxygen at night, making it perfect for your bedroom layout.",
          cost: "$15"
        },
        {
          name: "Spider Plant",
          image: "https://unsplash.com",
          description: "Filters airborne toxins effectively and is completely pet-safe.",
          cost: "$12"
        }
      ]
    },
    {
      category: "Aromatic & Medicinal Plants",
      plants: [
        {
          name: "Lavender",
          image: "https://unsplash.com",
          description: "Crisp, calming scent profile that effectively reduces stress and anxiety.",
          cost: "$18"
        },
        {
          name: "Aloe Vera",
          image: "https://unsplash.com",
          description: "Soothing medicinal gel skin that naturally heals burns and skin irritation.",
          cost: "$10"
        }
      ]
    }
  ];

  // Dispatches action to add the chosen plant to the global Redux cart state
  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  // Helper function to dynamically update buttons if an item is already inside the cart array
  const isItemInCart = (plantName) => {
    return cartItems.some(item => item.name === plantName);
  };

  return (
    <div className="product-list-container">
      {/* Navigation Header Section */}
      <nav className="navbar">
        <div className="navbar-logo" onClick={() => setShowCart(false)}>
          <h3>Paradise Nursery</h3>
        </div>
        <div className="navbar-links">
          <button className="nav-shop-link" onClick={() => setShowCart(false)}>Plants</button>
          <button className="nav-cart-btn" onClick={() => setShowCart(true)}>
            <svg xmlns="http://w3.org" viewBox="0 0 24 24" fill="currentColor" className="cart-icon">
              <path d="M2.25 2.25a.75.75 0 000 1.5h1.386l.17 1.023l1.192 7.151a4.5 4.5 0 004.417 3.766h6.449a4.5 4.5 0 004.417-3.766l1.192-7.151l.17-1.023H21.75a.75.75 0 000-1.5H2.25zm5.726 12.392l-.956-5.735h11.96l-.956 5.735a3 3 0 01-2.944 2.51H9.866a3 3 0 01-2.944-2.51zM9.75 19.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm10.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            {totalCartItems > 0 && <span className="cart-badge">{totalCartItems}</span>}
          </button>
        </div>
      </nav>

      {/* Main Content Router Toggle */}
      {!showCart ? (
        <div className="catalog-wrapper">
          {plantsArray.map((categoryGroup, catIndex) => (
            <div key={catIndex} className="category-section">
              <h2 className="category-title">{categoryGroup.category}</h2>
              <div className="plant-grid">
                {categoryGroup.plants.map((plant, plantIndex) => (
                  <div key={plantIndex} className="plant-card">
                    <img src={plant.image} alt={plant.name} className="plant-img" />
                    <div className="plant-details">
                      <h3 className="plant-name">{plant.name}</h3>
                      <p className="plant-desc">{plant.description}</p>
                      <span className="plant-cost">{plant.cost}</span>
                      
                      {/* Interactive Button Toggle Condition */}
                      <button 
                        className={`add-btn ${isItemInCart(plant.name) ? 'disabled' : ''}`}
                        onClick={() => handleAddToCart(plant)}
                        disabled={isItemInCart(plant.name)}
                      >
                        {isItemInCart(plant.name) ? 'Added to Cart' : 'Add to Cart'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <CartItem onContinueShopping={() => setShowCart(false)} />
      )}
    </div>
  );
}

export default ProductList;
