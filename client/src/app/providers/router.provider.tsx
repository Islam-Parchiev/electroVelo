import React from 'react';
import { RouterProvider } from 'react-router';

import { router } from '../router/Router';

export const AppRouterProvider = () => {

	return <RouterProvider router={router} />

};
