const { createSlice } = require("@reduxjs/toolkit");

export const CartItemsSlice = createSlice({
    name : "cartItem",
    initialState:[],
    reducers:{
        addToCart : (state, action) => {
            state.push(action.payload);
        },
        removeToCart : (state,action) => {
            return state.filter(item => (item.id != action.payload))
        }
    }
})

export const {addToCart,removeToCart} = CartItemsSlice.actions;
export default CartItemsSlice.reducer;