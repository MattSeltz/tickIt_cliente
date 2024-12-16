import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: null,
};

export const tokenSlice = createSlice({
	name: "token",
	initialState,
	reducers: {
		setTokenGlobal: (state, action) => {
			state.value = action.payload;
		},
	},
});

export const { setTokenGlobal } = tokenSlice.actions;
export default tokenSlice.reducer;
