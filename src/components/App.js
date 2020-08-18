import React from 'react';
import FirstPage from './FirstPage/FirstPage';
import SecondPage from './SecondPage/SecondPage';
import ThirdPage from './ThirdPage/ThirdPage';

const Dots = () => {
	return (
		<div className="Dots">
			<div className="Dots-Item Selected"> </div>
			<div className="Dots-Item"> </div>
			<div className="Dots-Item"> </div>
		</div>
	)	
};

const App = () => {
	function showSelected() {
		const dots = document.querySelectorAll('.Dots-Item');
		
		dots.forEach((elem) => elem.classList.remove('Selected'));
		if (window.pageYOffset === 0)
			dots[0].classList.add('Selected');
		else if (window.pageYOffset === 768)
			dots[1].classList.add('Selected');
		else if (window.pageYOffset > 768)
			dots[2].classList.add('Selected');
	}
	
	return (
		<div className="PageWrap" onLoad={showSelected}>
			<FirstPage />
			<SecondPage />
			<ThirdPage />
			<Dots />
		</div>
	);
};

export default App;