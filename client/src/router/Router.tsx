import { lazy,Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Main from '@pages/Main/Main';
import Layout from '@pages/Layout/Layout';
import ProtectedRoute from '@components/ProtectedRoute/ProtectedRoute';
import Loading from '@components/Loading/Loading';


const Catalog = lazy(() => import(/*webpackChunkName: "Catalog"*/'@pages/Catalog/Catalog'));
const Product = lazy(()=>import(/*webpackChunkName: "Product"*/'@pages/Product/Product'));
const Cart = lazy(()=>import(/*webpackChunkName: "Cart"*/'@pages/Cart/Cart'));
const CreateOrder =lazy(()=>import(/*webpackChunkName: "CreateOrder"*/'@pages/CreateOrder/CreateOrder'));
const Profile = lazy(()=>import(/*webpackChunkName: "Profile"*/'@pages/Profile/Profile'));
const Contacts = lazy(()=>import(/*webpackChunkName: "Contacts"*/'@pages/Contacts/Contacts'));
const Workshop = lazy(()=>import(/*webpackChunkName: "Workshop"*/'@pages/Workshop/Workshop'));
const AboutUs = lazy(()=>import(/*webpackChunkName: "AboutUs"*/'@pages/AboutUs/AboutUs'));
const Terms = lazy(()=>import(/*webpackChunkName: "Terms"*/'@pages/Terms/Terms'));
const Guarantees = lazy(()=>import(/*webpackChunkName: "Guarantees"*/'@pages/Guarantees/Guarantees'));
const Storage = lazy(()=>import(/*webpackChunkName: "Storage"*/'@pages/Storage/Storage'));
const Delivery = lazy(()=>import(/*webpackChunkName: "Delivery"*/'@pages/Delivery/Delivery'));
const Blog = lazy(()=>import(/*webpackChunkName: "Blog"*/'@pages/Blog/Blog'));
const SingleBlog = lazy(()=>import(/*webpackChunkName: "SingleBlog"*/'@pages/SingleBlog/SingleBlog'));
const OrdersHistory = lazy(()=>import(/*webpackChunkName: "OrdersHistory"*/'@components/OrdersHistory/OrdersHistory'));
const PersonalData=lazy(()=>import(/*webpackChunkName: "PersonalData"*/'@components/PersonalData/PersonalData'));
const ResetPassword=lazy(()=>import(/*webpackChunkName: "ResetPassword"*/'@components/ResetPassword/ResetPassword'));
const Favorites = lazy(()=>import(/*webpackChunkName: "Favorites"*/'@components/Favorites/Favorites'));
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
				element:
					<Suspense fallback={<Loading/>}>
						<Catalog/>
					</Suspense>,
			},
			{
				path:'product/:id',
				element:
				<Suspense fallback={<Loading/>}>
					<Product/>
				</Suspense>,
			},
			{
				path:'cart',
				element:
				<Suspense fallback={<Loading/>}>
					<ProtectedRoute>
						<Cart/>
					</ProtectedRoute>
				</Suspense>,
			},
			{	
				path:'/',

				element:
				<Suspense fallback={<Loading/>}>
					<ProtectedRoute>
						<Profile/>
					</ProtectedRoute>
				</Suspense>,
				children:[
					{
						path:'profile/history',
						element:
						<Suspense fallback={<Loading/>}>
							<OrdersHistory/>
						</Suspense>,
					},
					{
						path:'profile/data',
						element:
						<Suspense fallback={<Loading/>}>
							<PersonalData/>
						</Suspense>,
					},
					{
						path:'profile/password',
						element:
						<Suspense fallback={<Loading/>}>
							<ResetPassword/>
						</Suspense>,
					},
					{
						path:'profile/favorites',
						element:
						<Suspense fallback={<Loading/>}>
							<Favorites/>
						</Suspense>,
					},
				],
			},
			{
				path:'create-order',
				element:
				<Suspense fallback={<Loading/>}>
					<CreateOrder/>
				</Suspense>,
			},
			{
				path:'contacts',
				element:
				<Suspense fallback={<Loading/>}>
					<Contacts/>
				</Suspense>,
			},
			{
				path:'workshop',
				element:
				<Suspense fallback={<Loading/>}>
					<Workshop/>
				</Suspense>,
			},
			{
				path:'aboutUs',
				element:
				<Suspense fallback={<Loading/>}>
					<AboutUs/>
				</Suspense>,
			},
			{
				path:'terms',
				element:
				<Suspense fallback={<Loading/>}>
					<Terms/>
				</Suspense>,
			},
			{
				path:'guarantees',
				element:
				<Suspense fallback={<Loading/>}>
					<Guarantees/>
				</Suspense>,
			},
			{
				path:'storage',
				element:
				<Suspense fallback={<Loading/>}>
					<Storage/>
				</Suspense>,
			},
			{
				path:'delivery',
				element:
				<Suspense fallback={<Loading/>}>
					<Delivery/>
				</Suspense>,
			},
			{
				path:'blog',
				element:
				<Suspense fallback={<Loading/>}>
					<Blog/>
				</Suspense>,
			},
			{
				path:'blog/:id',
				element:
				<Suspense fallback={<Loading/>}>
					<SingleBlog/>
				</Suspense>,
			},
		],
	},
])
