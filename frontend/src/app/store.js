// import { configureStore } from "@reduxjs/toolkit";
// import { useReducer } from "../feature/userSlice";

// export default configureStore({
// reducer: {
// user: useReducer,
// }
// })

import { configureStore } from "@reduxjs/toolkit";
import {  userSlice } from "../feature/userSlice";

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
