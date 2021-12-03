import React, { useState, useEffect } from 'react';

import Table from '../Table/Table';

import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';
import { ReactComponent as ClearSearchIcon } from '../../assets/clearSearchIcon.svg';

import { columns, data } from '../../db/clientTableData';

import './clientSearch.css';

const ClientSearch = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [results, setResults] = useState(data);

	useEffect(() => {
		const includesNameOrSurname = (item, term) => {
			if (
				item.vardas.toLowerCase().includes(term) ||
				item.pavarde.toLowerCase().includes(term)
			)
				return true;
		};
		const filtered = data.filter((item) =>
			includesNameOrSurname(item, searchTerm.toLowerCase())
		);
		setResults(filtered);
	}, [searchTerm]);

	return (
		<main className='client-search'>
			<h1 className='client-search__title'>Kliento paieška</h1>
			<div className='client-search__content'>
				<div className='searchbar'>
					<SearchIcon className='searchbar__icon' />
					<input
						type='text'
						placeholder='Kliento paieška'
						className='searchbar__input'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button
						className='searchbar__button'
						onClick={(e) => setSearchTerm('')}
					>
						{/* chaining is not advised in BEM but makes sense to me here */}
						<ClearSearchIcon className='searchbar__button__icon' />
						Valyti
					</button>
				</div>
				<Table id='id' columns={columns} data={results} />
			</div>
		</main>
	);
};

export default ClientSearch;
