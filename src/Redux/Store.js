import { configureStore } from "@reduxjs/toolkit";
import Cart from "../Cart";

import CartReducer from "./Slics" ;

import productsReducer from "./Productslice"

const Store = configureStore({

    reducer : {

        cart : CartReducer ,

        products:productsReducer
    }
}) ;

export default Store ;