import { useClientSearch } from '../../context/clientSearchContext';

import { ReactComponent as SearchIcon } from '../../assets/searchIcon.svg';
import { ReactComponent as ClearSearchIcon } from '../../assets/clearSearchIcon.svg';

import './searchBar.css';
const SearchBar = () => {
	const { searchTerm, setSearchTerm } = useClientSearch();

	return (
		<div className='searchbar'>
			<SearchIcon className='searchbar__icon' />
			<input
				type='text'
				placeholder='Kliento paieška'
				className='searchbar__input'
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
			<button className='searchbar__button' onClick={(e) => setSearchTerm('')}>
				<ClearSearchIcon className='searchbar__button__icon' />
				Valyti
			</button>
		</div>
	);
};

export default SearchBar;
