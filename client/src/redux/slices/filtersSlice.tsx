import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../store';
interface InitialState {
	available:boolean;
	selectedCategories:string[];
	price:{
		min:number;
		max:number;
	},
	selectedBrands:string[];
	selectedMaterials:string[];
	selectedColors:string[];
}

const initialState:InitialState = {
	available:false,
	selectedCategories:[],
	price:{
		min:0,
		max:1000000,
	},
	selectedBrands:[],
	selectedMaterials:[],
	selectedColors:[],
}

export const filtersSlice = createSlice({
	name:'filters',
	initialState,
	reducers:{
		toggleAvailable:(state,action:PayloadAction<boolean>)=> {
      	state.available=action.payload
		},
		changeCategory: (state, action: PayloadAction<string>) => {
			const category = action.payload;
			if (state.selectedCategories.includes(category)) {
				state.selectedCategories = state.selectedCategories.filter((c) => c !== category);
			} else {
				state.selectedCategories.push(category);
			}
		},
		changePrice:(state,action:PayloadAction<any>)=> {
      	state.price={...action.payload}
		},
		changeBrand:(state,action:PayloadAction<string>)=> {
    		const brand = action.payload;
			 if(state.selectedBrands.includes(brand)){
				state.selectedBrands=state.selectedBrands.filter((b)=>b!==brand);
			 }else {
				state.selectedBrands.push(brand);
			 }

		},
		changeMaterial: (state, action: PayloadAction<string>) => {
			const material = action.payload;
			if (state.selectedMaterials.includes(material)) {
				state.selectedMaterials = state.selectedMaterials.filter((c) => c !== material);
			} else {
				state.selectedMaterials.push(material);
			}
		},
		changeColor: (state, action: PayloadAction<string>) => {
			const color = action.payload;
			if (state.selectedColors.includes(color)) {
				state.selectedColors = state.selectedColors.filter((c) => c !== color);
			} else {
				state.selectedColors.push(color);
			}
		},
		resetFilters:(state,action: PayloadAction<any>)=> {
			state.available=false;
			state.price={min:0,max:1000000}
			state.selectedBrands=[]
			state.selectedCategories=[]
			state.selectedColors=[]
			state.selectedMaterials=[]
		},
	},
})
export const selectFilters = (state: RootState) => state.filters;

export const {changeCategory,toggleAvailable,changePrice,changeBrand,changeMaterial,changeColor,resetFilters }= filtersSlice.actions;
export default  filtersSlice.reducer;
