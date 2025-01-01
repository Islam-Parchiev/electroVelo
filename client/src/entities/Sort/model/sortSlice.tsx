import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { ISortListItem } from '../../../shared/types/Sort'

import { RootState } from '../../../app/store/hooks'

interface InitialState {
	sort: string
	sortProperty: string
}

const initialState: InitialState = {
	sort: 'По умолчанию',
	sortProperty: '',
}

export const sortSlice = createSlice({
	name: 'sort',
	initialState,
	reducers: {
		changeSortType: (state, action: PayloadAction<ISortListItem>) => {
			state.sort = action.payload.name
			state.sortProperty = action.payload.sortProperty
		},
	},
})

export const selectSort = (state: RootState) => state.sort

export const { changeSortType } = sortSlice.actions
export default sortSlice.reducer
