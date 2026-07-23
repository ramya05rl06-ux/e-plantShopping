import React, { useState } from 'react';
import './App.css'; // Make sure your background CSS is imported

function App() {
  // State to manage whether the user has clicked "Get Started" and entered the shop
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  return (
    <div className="landing-page">
      {!showProductList ? (
        <div className="landing-content">
          {/* Company Name */}
          <h1>Welcome To Paradise Nursery</h1>
          
          {/* Brief Company Pitch */}
          <p>Where Greenery Meets Peace. Bring nature closer to your home with our handpicked, premium quality plants.</p>
          
          {/* Action Button */}
          <button className="get-started-btn" onClick={handleGetStartedClick}>
            Get Started
          </button>
        </div>
      ) : (
        <div className="shop-content" style={{ padding: '40px', color: '#333', background: '#fff', borderRadius: '8px' }}>
          {/* Placeholder content where your plant list/store UI will display after clicking the button */}
          <h2>Our Beautiful Plant Collection</h2>
          <p>Explore our premium plants catalog below...</p>
          <button onClick={() => setShowProductList(false)} style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}>
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
