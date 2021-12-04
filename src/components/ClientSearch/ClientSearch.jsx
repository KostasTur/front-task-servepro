import SearchBar from '../SearchBar/SearchBar';
import Table from '../Table/Table';
import Loader from '../Loader/Loader';

import { useClientSearch } from '../../context/clientSearchContext';

import { columns } from '../../db/clientTableData';

import './clientSearch.css';

const ClientSearch = () => {
	const { results, isFetching, fetchClientInfo } = useClientSearch();
	return (
		<main className='client-search'>
			<h1 className='client-search__title'>Kliento paieška</h1>
			<div className='client-search__content'>
				<SearchBar />
				<Table
					id='id'
					columns={columns}
					data={results}
					action={fetchClientInfo}
				/>
			</div>
			{isFetching && <Loader />}
		</main>
	);
};

export default ClientSearch;
