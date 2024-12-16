import { configureStore } from "@reduxjs/toolkit";

import tokenReducer from "../contexts/token//tokenSlice";

export const store = configureStore({
	reducer: {
		token: tokenReducer,
	},
});
