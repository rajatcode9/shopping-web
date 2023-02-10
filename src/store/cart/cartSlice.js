import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  totalCount:0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
        // state.cart = action.payload
        return { 
        ...state,
        cart: [...state.cart, action.payload],
        totalCount:state.totalCount+action.payload.count
        }
      },
  },
})

// Action creators are generated for each case reducer function
export const {addToCart} = cartSlice.actions

export default cartSlice.reducer