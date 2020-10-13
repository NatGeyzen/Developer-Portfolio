import React, { useState } from 'react';
import './App.css';

import Navigation from './components/Navigation/Navigation';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Blog from './sections/Blog/Blog';
import Contact from './sections/Contact/Contact';

function App() {

	const [ activeSection, setActiveSection ] = useState('about');

  	return (
    	<div className="App">
			<Navigation click={clickedNavLink => setActiveSection(clickedNavLink)}/>
			{ activeSection === 'about' ? <Hero /> : null}
			{ activeSection === 'skills' ? <Skills /> : null}
			{ activeSection === 'projects' ? <Projects /> : null}
			{ activeSection === 'blog'? <Blog /> : null}
			{ activeSection === 'contact' ? <Contact /> : null}
    	</div>
  	);
}

export default App;