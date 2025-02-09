import { configureStore } from '@reduxjs/toolkit';

import filters from '../../entities/Filters/model/filtersSlice';
import sort from '../../entities/Sort/model/sortSlice';
import user from '../../entities/User/model/userSlice'
import product from '../../entities/Product/model/productSlice';

export const store = configureStore({
	reducer: {
		filters,
		sort,
		user,
		product,
	},
});


