import Layout from '../shared/layout';
import About from './about';
import Contacts from './contacts';
import Welcome from './welcome';

const routes = [
	{
		path: '/',
		element: <Layout component={<Welcome />} />,
	},
	{
		path: '/about',
		element: <Layout component={<About />} />,
	},
	{
		path: '/contacts',
		element: <Layout component={<Contacts />} />,
	},
];

export default routes;
