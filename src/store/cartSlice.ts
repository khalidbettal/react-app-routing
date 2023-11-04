import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    quantityItems: number;
    quantityPrice: number;

}

interface CartState {
    items: CartItem[];
    

}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state: CartState, action: PayloadAction<CartItem>): CartState {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                // If the item already exists in the cart, update the quantity or any other relevant property
                existingItem.quantityItems += 1; // Update the quantity or any other relevant property
                existingItem.quantityPrice = existingItem.quantityItems * existingItem.price; // Update the quantity or any other relevant property
            } else {
                state.items.push({ ...newItem, quantityItems: 1, quantityPrice: newItem.price }); // Add the item to the cart
            }
            
            return state;
        },
        removeFromCart(state: CartState, action: PayloadAction<number>): CartState {
            state.items = state.items.filter((item) => item.id !== action.payload);
            return state;
        },

        incQuantity(state: CartState, action: PayloadAction<number>): CartState {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantityItems += 1;
                state.items[itemIndex].quantityPrice = state.items[itemIndex].quantityItems * state.items[itemIndex].price;
            }
            return state;
        },
        decQuantity(state: CartState, action: PayloadAction<number>): CartState {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantityItems -= 1;
                state.items[itemIndex].quantityPrice = state.items[itemIndex].quantityItems * state.items[itemIndex].price;
            }
            return state;
        },
        
        
    },
});

export const { addToCart, removeFromCart, incQuantity, decQuantity } = cartSlice.actions;

export default cartSlice.reducer;
