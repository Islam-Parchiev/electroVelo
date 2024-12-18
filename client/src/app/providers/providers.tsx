import { ReactNode } from 'react';
import { store } from '@redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Provider } from 'react-redux';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,

		},
	},
});
export const AppProviders = ({ children }: { children: ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				{children}
			</Provider>
		</QueryClientProvider>
	)
}
