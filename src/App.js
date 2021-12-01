import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import FunkcijosPage from './pages/FunkcijosPage/FunkcijosPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
	return (
		<>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/funkcijos' element={<FunkcijosPage />} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
