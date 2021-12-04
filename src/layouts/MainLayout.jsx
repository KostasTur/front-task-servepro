import React from 'react';
import { Outlet } from 'react-router-dom';
import ActionsBar from '../components/ActionsBar/ActionsBar';
import Footer from '../components/Footer/Footer';
import SideNav from '../components/SideNav/SideNav';

import './mainLayout.css';

// Footer inside main is not correct html structure. Options: use div instead of footer or use main tag in child component which better represents main content of the page in this case the ClientSearch Component.

// this looks like layout componenet could use the new react router flow with <Outlet/> component
const MainLayout = () => {
	return (
		<div className='main-layout'>
			<SideNav />
			<ActionsBar />
			<Outlet />
			<Footer />
		</div>
	);
};

export default MainLayout;
