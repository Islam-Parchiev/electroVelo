import {configureStore} from '@reduxjs/toolkit';

import {useDispatch,useSelector,TypedUseSelectorHook} from 'react-redux';

import filters from './slices/filtersSlice';

export const store = configureStore({
	reducer:{
		filters,
	},
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector;
