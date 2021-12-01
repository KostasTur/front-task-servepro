import React from 'react';
import SideNav from '../../components/SideNav/SideNav';
import Footer from '../../components/Footer/Footer';
import './funkcijosPage.css';
import ActionsBar from '../../components/ActionsBar/ActionsBar';
import ClientSearch from '../../components/ClientSearch/ClientSearch';
// Footer inside main is not correct html structure
const FunkcijosPage = () => {
	return (
		<main className='funkcijos-page'>
			<SideNav />
			<ActionsBar />
			<ClientSearch />
			<Footer />
		</main>
	);
};

export default FunkcijosPage;
