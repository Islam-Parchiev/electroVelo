import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
interface InitialState {
	available:boolean;
	selectedCategories:string[];
}

const initialState:InitialState = {
	available:false,
	
	selectedCategories:[],
}

export const filtersSlice = createSlice({
	name:'filters',
	initialState,
	reducers:{
		toggleAvailable:(state,action:PayloadAction<boolean>)=> {
      	state.available=action.payload
		},
		toggleCategory: (state, action: PayloadAction<string>) => {
			const category = action.payload;
			if (state.selectedCategories.includes(category)) {
				state.selectedCategories = state.selectedCategories.filter((c) => c !== category);
			} else {
				state.selectedCategories.push(category);
			}
			console.log(state.selectedCategories);
		},
	},
})
export const selectFilters = (state: RootState) => state.filters;

export const {toggleCategory,toggleAvailable }= filtersSlice.actions;
export default  filtersSlice.reducer;
