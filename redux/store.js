const { configureStore } = require("@reduxjs/toolkit");
import userLoginSlice from "./auth/login-slice";
import userLogoutSlice from "./auth/logout-slice";
import userRegisterSlice from "./auth/register-slice";
const store = configureStore({
  reducer: {
    userLogin: userLoginSlice,
    userLogout: userLogoutSlice,
    userRegister: userRegisterSlice,
  },
});

export default store;
