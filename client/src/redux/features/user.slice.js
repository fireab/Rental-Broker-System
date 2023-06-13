// import { configureStore, createSlice } from "@reduxjs/toolkit";
import { configureStore, createSlice } from "@reduxjs/toolkit";

// const initialState = {
// 	toppings: ["pepperoni"],
//     glutenFree: false,
// };

// export const pizzaSlice = createSlice({
//     name: "pizza",
//     initialState,
//     reducers: {
//         addTopping: (state, action) =>{
//             state.toppings.push(action.payload)
//         },
//         removeTopping: (state, action) =>{
//             state.toppings = state.toppings.filter(topping=>topping!= action.payload)
//         },
//         toggleGlutenFree: (state) =>{
//             state.glutenFree = !state.glutenFree
//         }
//     }
// })

// export const { addTopping, removeTopping, toggleGlutenFree } = pizzaSlice.actions

// export default pizzaSlice.reducer

const initialState = {
	isAuthenticated: false,
	user: null,
};

const userSlice = createSlice({
	name: "userSlice",
	initialState,
	reducers: {
		setUser: (state, action) => {
			console.log("action.payload.user");
			console.log(action.payload);

			state.isAuthenticated = true;
			state.user = action.payload;
		},
		logoutUser: (state) => {
			state.isAuthenticated = false;
			state.user = null;
		},
	},
});

export default userSlice.reducer;

export const { logoutUser, setUser } = userSlice.actions;
