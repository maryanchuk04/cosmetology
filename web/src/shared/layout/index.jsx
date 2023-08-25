import React from 'react';
import Header from '../header';
import Footer from '../footer';
import Container from '../../components/Container';

const Layout = ({ component }) => {
	return (
		<Container>
			<Header />
			{component}
			<Footer />
		</Container>
	);
};

export default Layout;
