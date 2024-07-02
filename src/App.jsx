import './App.css';
import Layout from './components/Layout';
import Aos from 'aos';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

const App = () => {
	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<Layout>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</Layout>
	);
};

export default App;
