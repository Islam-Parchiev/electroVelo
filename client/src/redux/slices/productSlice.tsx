import { RootState } from '@redux/store';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface InitialState {
	size:string;
	color:string;
	count:number;
}

const initialState:InitialState = {
	size:'',
	color:'',
	count:1,
}

export const productSlice= createSlice({
	name:'product',
	initialState,
	reducers:{
		changeSize:(state,action:PayloadAction<string>)=>{
			state.size=action.payload
		},
		changeColor:(state,action:PayloadAction<string>)=>{
			state.color=action.payload
		},
	},
})
export const selectProduct = (state: RootState) => state.product;

export const {changeSize,changeColor}= productSlice.actions;
export default  productSlice.reducer;
