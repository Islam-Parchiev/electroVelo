import { createBrowserRouter } from 'react-router-dom';

import Main from '@pages/Main/Main';
import Layout from '@pages/Layout/Layout';
import Catalog from '@pages/Catalog/Catalog';
import Product from '@pages/Product/Product';
import Cart from '@pages/Cart/Cart';
import CreateOrder from '@pages/CreateOrder/CreateOrder';
import Profile from '@pages/Profile/Profile';
import Contacts from '@pages/Contacts/Contacts';
import Workshop from '@pages/Workshop/Workshop';

import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';
import OrdersHistory from '@components/OrdersHistory/OrdersHistory';
import PersonalData from '@components/PersonalData/PersonalData';
import ResetPassword from '@components/ResetPassword/ResetPassword';
import Favorites from '@components/Favorites/Favorites';

export const router = createBrowserRouter([
	{
		path:'/',
		element:<Layout/>,
		errorElement:<div>Error</div>,
		children:[
			{
				index:true,
				element:<Main/>,
			},
			{
				path:'catalog',
				element:<Catalog/>,
			},
			{
				path:'product/:id',
				element:<Product/>,
			},
			{
				path:'cart',
				element:
				<ProtectedRoute>
					<Cart/>
				</ProtectedRoute>,
			},
			{	
				path:'/',
				element:
				<ProtectedRoute>
					<Profile/>
				</ProtectedRoute>,
				children:[
					{
						path:'profile/history',
						element:<OrdersHistory/>,
					},
					{
						path:'profile/data',
						element:<PersonalData/>,
					},
					{
						path:'profile/password',
						element:<ResetPassword/>,
					},
					{
						path:'profile/favorites',
						element:<Favorites/>,
					},
				],
			},
			{
				path:'create-order',
				element:<CreateOrder/>,
			},
			{
				path:'contacts',
				element:<Contacts/>,
			},
			{
				path:'workshop',
				element:<Workshop/>,
			},
		],
	},
])
