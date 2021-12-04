import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import MainLayout from './layouts/MainLayout';
// import FunkcijosPage from './pages/FunkcijosPage/FunkcijosPage';

import HomePage from './pages/HomePage/HomePage';
import FunctionsComponent from './components/FunctionsComponent/FunctionsComponent';
import ClientSearch from './components/ClientSearch/ClientSearch';
import EmptyComponent from './components/EmptyComponent/EmptyComponent';

// --- Page flow
// function App() {
// 	return (
// 		<>
// 				<Header />
// 				<Routes>
// 					<Route path='/' element={<HomePage />} />
// 					<Route path='/funkcijos' element={<FunkcijosPage />} />
// 				</Routes>
// 		</>
// 	);
// }

// export default App;

// --- Layout flow
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/funkcijos' element={<MainLayout />}>
					<Route element={<FunctionsComponent />} />
					<Route path='/funkcijos/registracija' element={<EmptyComponent />} />
					<Route path='/funkcijos/kliento-paieska' element={<ClientSearch />} />
					<Route path='/funkcijos/saskaitos' element={<EmptyComponent />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
