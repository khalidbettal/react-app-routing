import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
// import countSlice from "./countSlice";





const store = configureStore({
    reducer: {
        cart: cartSlice,
        products : productSlice,
        

    },
})

export default store ;