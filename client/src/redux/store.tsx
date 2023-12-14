import {configureStore} from '@reduxjs/toolkit';

import {useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux';

import filters from './slices/filtersSlice';
import sort from './slices/sortSlice';
import user from './slices/userSlice'
import product from './slices/productSlice';

export const store = configureStore({
	reducer:{
		filters,
		sort,
		user,
		product,
	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
