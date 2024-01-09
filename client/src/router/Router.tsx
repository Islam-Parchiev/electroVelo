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
import AboutUs from '@pages/AboutUs/AboutUs';
import Terms from '@pages/Terms/Terms';
import Guarantees from '@pages/Guarantees/Guarantees';

import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';
import OrdersHistory from '@components/OrdersHistory/OrdersHistory';
import PersonalData from '@components/PersonalData/PersonalData';
import ResetPassword from '@components/ResetPassword/ResetPassword';
import Favorites from '@components/Favorites/Favorites';
import Storage from '@pages/Storage/Storage';

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
			{
				path:'aboutUs',
				element:<AboutUs/>,
			},
			{
				path:'terms',
				element:<Terms/>,
			},
			{
				path:'guarantees',
				element:<Guarantees/>,
			},
			{
				path:'storage',
				element:<Storage/>,
			},
		],
	},
])
