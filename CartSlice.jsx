import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array to store cart items: { name, image, cost, quantity }
  },
  reducers: {
    // 1. Adds an item to the cart or increments quantity if it already exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    
    // 2. Removes an item entirely from the cart based on its name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    
    // 3. Updates the specific quantity of an item (e.g., via manual input or + / - buttons)
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate && quantity > 0) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Export the action creators for use in components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Export the reducer to build the Redux store
export default CartSlice.reducer;
