import './App.css';
import Layout from './components/Layout';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/projects';
import Contact from './pages/Contact';
import Hero from './components/Hero';

const App = () => {
	return (
		<Layout>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</Layout>
	);
};

export default App;
