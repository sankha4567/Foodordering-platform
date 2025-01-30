import { createSlice,current } from "@reduxjs/toolkit";

const cartSlice=createSlice({
  name:'cart',
  initialState:{
    items:[]
  },
  // reducers are the object .it consists of action we can take
  reducers:{
    addItem:(state,action)=>{
      // in eariler vaninla (older react ) state mutation was not allowed,returning was mandatory
      // const newState=[...state];newState.items.push(newState);return newState


      // mutating the state
      // in newer state we have to mutate the state
      // internally redux is doing all of that.react internally uses immer liabary.immer basically find the differnce between mutated state and original state.gives you new state that is immutable
   state.items.push(action.payload);
   //here return is not mandatory
    },
    removeItem:(state,action)=>{
      state.items.pop();
    },
    // originalState={items:{"pizza"}}
    clearCart:(state,action)=>{
      // state=["akshay"];
      // console.log(state);//akshay
      // console.log(current(state));
      // state=[];
      // console.log(state);//[]
      // it is not mutating the state it is adding refernce to it.so if we try to do it no changes happens
      // state is a local variable here if we try to update it it will chnge the value locally.original state is passed through the function.so original value wont chnage
      // state.items.length=0;
      // Redux toolkit-either mutate existing state or return a new state
      return {items:[]};
      // this new [] will be replaced inside originalState[]
    },
  },
});
// cartSlice is the big object which has action and reducer
// // {
// actions:{
//   addItem
// },reducer
// //}
export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;