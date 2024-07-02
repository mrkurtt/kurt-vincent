import React from 'react';
import Hero from '../components/Hero';
import About from '../pages/About';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';

const Home = () => {
	return (
		<>
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</>
	);
};

export default Home;
