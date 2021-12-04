import React, { createContext, useContext, useState, useEffect } from 'react';

import { data } from '../db/clientTableData.js';

const clientSearchContext = createContext();

export const useClientSearch = () => {
	return useContext(clientSearchContext);
};

export const ClientSearchProvider = ({ children }) => {
	// search state
	const [searchTerm, setSearchTerm] = useState('');
	const [results, setResults] = useState(data);
	// fetch state
	const [isFetching, setIsFetching] = useState(false);

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

	const fetchClientInfo = () => {
		setIsFetching(true);
		setTimeout(() => {
			setIsFetching(false);
		}, 5000);
	};

	const value = {
		results,
		setResults,
		searchTerm,
		setSearchTerm,
		isFetching,
		fetchClientInfo,
	};
	return (
		<clientSearchContext.Provider value={value}>
			{children}
		</clientSearchContext.Provider>
	);
};
