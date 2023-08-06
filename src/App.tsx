import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from './Dashboard';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from './components/theme-provider';

const queryClient = new QueryClient();

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
				<Dashboard />
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}
