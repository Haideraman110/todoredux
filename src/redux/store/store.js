import { configureStore } from "@reduxjs/toolkit";
import todoslice from "../todoslice/todoslice";

const store=configureStore({
    reducer:{
        todo:todoslice

    }
})

export default  store