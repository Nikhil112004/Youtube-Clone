import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSLice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        chat: chatSlice,
    }
});

export default store;