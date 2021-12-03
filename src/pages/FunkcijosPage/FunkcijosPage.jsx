import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import Footer from '../../components/Footer/Footer';
import './funkcijosPage.css';
import ActionsBar from '../../components/ActionsBar/ActionsBar';
import ClientSearch from '../../components/ClientSearch/ClientSearch';

// Footer inside main is not correct html structure. Options: use div instead of footer or use main tag in child component which better represents main content of the page in this case the ClientSearch Component.
const FunkcijosPage = () => {
	return (
		<div className='funkcijos-page'>
			<SideNav />
			<ActionsBar />
			<ClientSearch />
			<Footer />
		</div>
	);
};

export default FunkcijosPage;
