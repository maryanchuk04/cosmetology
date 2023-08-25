import React from 'react';
import Container from '../../components/Container';
import { Link, NavLink } from 'react-router-dom';
import { routes } from '../../core/routes';

const LinkWrapper = ({ label, path }) => {
	const className = 'text-xl font-semibold text-black/70 mx-8';
	return (
		<NavLink
			to={path}
			className={({ isActive }) =>
				isActive
					? `!text-primary font-extrabold underline ${className}`
					: `${className} hover:text-primary/70 duration-150`
			}
		>
			{label}
		</NavLink>
	);
};

const ContactButton = () => {
	return (
		<button className='rounded-lg text-xl  font-bold text-black/70 bg-white p-5 hover:scale-105 hover:text-primary hover:shadow-primary duration-200'>
			Звʼязатися з нами
		</button>
	);
};

const Header = () => {
	return (
		<div className='h-28 flex justify-between items-center'>
			<Link to={'/'} className='w-fit'>
				<img src='/images/logo.jpeg' className='rounded-full h-24 w-24' alt='logo' />
			</Link>
			<div className=''>
				{routes.map(({ label, path }, index) => (
					<LinkWrapper key={index} label={label} path={path} />
				))}
			</div>
			<ContactButton />
		</div>
	);
};

export default Header;
