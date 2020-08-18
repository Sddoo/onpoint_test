import React from "react";
import ArrowPng from "../images/bottom.png"

const Arrow = ({position, dataAlt}) => {
	if (position === 'top')
		return (
			<div className="Arrow Arrow_position_top" data-alt={dataAlt}>
				<div>Scroll top</div>
				<img src={ArrowPng} alt="arrow"/>
			</div>
		);
	else if (position === 'bottom')
		return (
			<div className="Arrow Arrow_position_bottom" data-alt={dataAlt}>
				<div>Scroll down</div>
				<img src={ArrowPng} alt="arrow"/>
			</div>
		);
};

export default Arrow