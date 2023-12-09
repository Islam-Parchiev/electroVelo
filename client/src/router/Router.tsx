import { createBrowserRouter } from 'react-router-dom';

import Main from '@pages/Main/Main';

import Layout from '@pages/Layout/Layout';
import Catalog from '@pages/Catalog/Catalog';
import Product from '@pages/Product/Product';

// import Home from "../pages/Home";
// import Transactions, { transactionAction, transactionLoader } from "../pages/Transactions";
// import Categories, { categoriesAction, categoryLoader } from "../pages/Categories";
// import Auth from "../pages/Auth";
// import ProtectedRoute from "../components/ProtectedRoute";

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
			// {
			// 	path:'transaction',
			// 	loader:transactionLoader,
			// 	action:transactionAction,
			// 	element:
			// 					<ProtectedRoute>
			// 						<Transactions/>
			// 					</ProtectedRoute>,
			// },
			
		],
	},
])
