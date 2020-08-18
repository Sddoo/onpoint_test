import React from 'react';

const Ice = ({img, top, left, width}) => {
	let style = {
		top: top,
		left: left,
		width: width,
		zIndex: 1000
	};
	
	return (
		<img src={img} alt="ice" className={'Ice'} style={style}/>
	);
};

export default Ice;