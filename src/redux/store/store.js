import { configureStore } from "@reduxjs/toolkit";
import todoslice from "../todoslice/todoslice";
import RecentDel from "../todoslice/RecentDel";

const store=configureStore({
    reducer:{
        todo:todoslice,
        recdel:RecentDel

    }
})

export default  store