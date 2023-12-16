const { configureStore } = require("@reduxjs/toolkit");
import userLoginSlice from "./auth/login-slice";
import userLogoutSlice from "./auth/logout-slice";
const store = configureStore({
  reducer: {
    userLogin: userLoginSlice,
    userLogout: userLogoutSlice,
  },
});

export default store;
