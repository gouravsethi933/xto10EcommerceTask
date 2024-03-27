const {createSlice}= require("@reduxjs/toolkit");


const cartSlice= createSlice({
    name: 'cart',

    initialState : [],

    reducers:{
        add(state , action){
            state.push(action.payload);
        },

        remove(state,action){
            return  state.filter((item)=> item.id !== action.payload);
        },
        select_Product(state,action){
            return state.map((item)=>item.id === action.payload);
        }
    }
})

export const {add,remove ,select_Product} = cartSlice.actions;
export default cartSlice.reducer;