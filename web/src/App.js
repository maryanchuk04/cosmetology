import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './pages';

const router = createBrowserRouter(routes);

const App = () => {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
