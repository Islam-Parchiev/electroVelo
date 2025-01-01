import { createBrowserRouter } from 'react-router-dom';



import OrdersHistory from '@pages/Profile/ui/OrdersHistory/OrdersHistory';
import PersonalData from '@pages/Profile/ui/PersonalData/PersonalData';
import ResetPassword from '@pages/Profile/ui/ResetPassword/ResetPassword';
import Favorites from '@pages/Profile/ui/Favorites/Favorites';

import { Main, Catalog, Product, Cart, CreateOrder, Profile, Contacts, Workshop, AboutUs, Terms, Guarantees, Storage, Delivery, Blog, SingleBlog } from '../../pages';

import { Layout } from '../Layout'

import ProtectedRoute from './../components/ProtectedRoute/ProtectedRoute';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <div>Error</div>,
		children: [
			{
				index: true,
				element: <Main />,
			},
			{
				path: 'catalog',
				element: <Catalog />,
			},
			{
				path: 'product/:id',
				element: <Product />,
			},
			{
				path: 'cart',
				element:
					<ProtectedRoute>
						<Cart />
					</ProtectedRoute>,
			},
			{
				path: '/',
				element:
					<ProtectedRoute>
						<Profile />
					</ProtectedRoute>,
				children: [
					{
						path: 'profile/history',
						element: <OrdersHistory />,
					},
					{
						path: 'profile/data',
						element: <PersonalData />,
					},
					{
						path: 'profile/password',
						element: <ResetPassword />,
					},
					{
						path: 'profile/favorites',
						element: <Favorites />,
					},
				],
			},
			{
				path: 'create-order',
				element: <CreateOrder />,
			},
			{
				path: 'contacts',
				element: <Contacts />,
			},
			{
				path: 'workshop',
				element: <Workshop />,
			},
			{
				path: 'aboutUs',
				element: <AboutUs />,
			},
			{
				path: 'terms',
				element: <Terms />,
			},
			{
				path: 'guarantees',
				element: <Guarantees />,
			},
			{
				path: 'storage',
				element: <Storage />,
			},
			{
				path: 'delivery',
				element: <Delivery />,
			},
			{
				path: 'blog',
				element: <Blog />,
			},
			{
				path: 'blog/:id',
				element: <SingleBlog />,
			},
		],
	},
])
