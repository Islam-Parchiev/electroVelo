import ReactDOM from 'react-dom/client';
import React from 'react';
import {QueryClient,QueryClientProvider} from '@tanstack/react-query'; 
import { Provider } from 'react-redux';
import { store } from '@redux/store';

import App from './App';

import './index.scss';

const queryClient = new QueryClient({
  	defaultOptions:{
   	 queries:{
    	  refetchOnWindowFocus:false,

   	 },
   	 // mutations
 	 },
});


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement,
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<App />
			</QueryClientProvider>
		</Provider>
	</React.StrictMode>,
);


