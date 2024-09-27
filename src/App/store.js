import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

// >>>>>>>>>>>>>>>The Store

// The Redux store is like a giant container that holds all the data for your application.

// Think of the store as a box with different
// compartments for different data types.
// You can store any data you want in these compartments,
//  and it can hold various kinds of data, such as strings,
//  numbers, arrays, objects, and even functions.
