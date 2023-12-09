import {configureStore} from '@reduxjs/toolkit';

import {useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux';

import filters from './slices/filtersSlice';
import sort from './slices/sortSlice';

export const store = configureStore({
	reducer:{
		filters,
		sort,
	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
