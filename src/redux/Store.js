const { configureStore } = require("@reduxjs/toolkit");
const { default: CartItemsSlice } = require("./slices/CartItemsSlice");


export const store = configureStore({
    reducer:{
        cartItem : CartItemsSlice
    }
})