import { createSlice } from "@reduxjs/toolkit";
 const states = {
    wish:[],
    cart:[]
 }
const wishlist = createSlice({
    name:"wishlist",
    initialState:states,
    reducers:{
        addToWishlist:(state,action)=>{

           state.wish.push(action.payload)
            
        },
        removeFromWishlist:(state,action)=>{
            state.wish.splice(action.payload, 1)
        },
        addToCart:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeFromCart:(state,action)=>{
            state.cart.splice(action.payload, 1)
        },
        placeOrder:(state)=>{
            state.cart=[]
        }
    }
})
export const { addToWishlist,removeFromWishlist,addToCart,removeFromCart,placeOrder } = wishlist.actions;
export default wishlist.reducer