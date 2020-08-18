import React, {useState} from 'react';
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import './ThirdPage.css'
import Arrow from "../Arrow";

const ThirdPage = () => {
	const slides = [<FirstSlide key={1}/>, <SecondSlide key={2}/>, <ThirdSlide key={3}/>];
	const [sliderValue, setSliderValue] = useState(0);

	function handleChange(e) {
		setSliderValue(e.target.value);
		if (e.target.value <= 25) {
			document.querySelector('.Slides').style.transform = 'translateX(0vw)';
		} else if (e.target.value > 25 && e.target.value < 75) {
			document.querySelector('.Slides').style.transform = 'translateX(-100vw)';
		} else {
			document.querySelector('.Slides').style.transform = 'translateX(-200vw)';
		}
	}

	function truncSlider() {
		if (sliderValue <= 25) {
			setSliderValue(0);
		} else if (sliderValue > 25 && sliderValue < 75) {
			setSliderValue(50);
		} else {
			setSliderValue(100);
		}
	}

	return (
		<>
			<div className="Page ThirdPage">
				<Arrow position='top' dataAlt={'1'}/>
				<div className="ThirdPage-Content">
					<div className="Slides">
						{slides}
					</div>
				</div>
				<div className="Slider">
					<input
						className="Slider-Input"
						type="range"
						min="0" max="100"
						step="0.1"
						value={sliderValue}
						onChange={handleChange}
						onTouchEnd={truncSlider}/>
					<div className="Slider-Years">
						<div className="Slider-Year">1988</div>
						<div className="Slider-Year">2009</div>
						<div className="Slider-Year">2016</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ThirdPage;