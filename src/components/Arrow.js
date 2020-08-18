import React from "react";
import ArrowPng from "../images/bottom.png"

const Arrow = ({position, dataAlt}) => {
	function handleArrowClick (e) {
		const dots = document.querySelectorAll('.Dots-Item');
		
		dots.forEach((elem) => elem.classList.remove('Selected'));
		dots[e.target.parentNode.dataset.alt].classList.add('Selected');
		if (position === 'bottom') {
			window.scrollBy(0, 768);
		} else {
			window.scrollBy(0, -768);
		}
	}

	if (position === 'top')
		return (
			<div className="Arrow Arrow_position_top" data-alt={dataAlt} onClick={handleArrowClick}>
				<div>Scroll top</div>
				<img src={ArrowPng} alt="arrow"/>
			</div>
		);
	else if (position === 'bottom')
		return (
			<div className="Arrow Arrow_position_bottom" data-alt={dataAlt} onClick={handleArrowClick}>
				<div>Scroll down</div>
				<img src={ArrowPng} alt="arrow"/>
			</div>
		);
};

export default Arrow