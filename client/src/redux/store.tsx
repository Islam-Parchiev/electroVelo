import { configureStore } from '@reduxjs/toolkit';

import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';

import filters from '../entities/Filters/model/filtersSlice';
import sort from '../entities/Sort/model/sortSlice';
import user from '../entities/User/model/userSlice'
import product from '../entities/Product/model/productSlice';

export const store = configureStore({
	reducer: {
		filters,
		sort,
		user,
		product,
	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
