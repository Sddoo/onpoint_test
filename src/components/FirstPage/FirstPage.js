import React from 'react';
import './FirstPage.css'
import Arrow from '../Arrow'

const Point = ({x, y, text = '', textPosition, size}) => {
	let flexDirection;
	
	switch (textPosition) {
		case 'right':
			flexDirection = 'row-reverse';
			break;
		case 'left':
			flexDirection = 'row';
			break;
		case 'top':
			flexDirection = 'column';
			break;
		case 'bottom':
			flexDirection = 'column-reverse';
			break;
		default:
			flexDirection = 'row';
			break;
	}
	const pointCircleStyles = {
		width: size + 'px',
		height: size + 'px',
		borderRadius: size / 2
	},
	pointStyles = {
		left: x + 'px',
		top: y + 'px',
		flexDirection: flexDirection
	};

	return (
		<div className="Point" style={pointStyles}>
			<div className={'Point-Text'}>{text}</div>
			<div className="Point-Circle" style={pointCircleStyles}>
				<div className="Point-CircleContent" style={pointCircleStyles}> </div>
			</div>
		</div>
	);
};

const FirstPage = () => {
	return (
		<>
			<div className="Page FirstPage">
				<div className="Layer FirstLayer">
					<h1>Всегда ли цели терапии СД2
						на поверхности?</h1>
					<Point x={575} y={275} text={'Цель по HbA1c'} textPosition={'right'} size={20}/>
					<Point x={280} y={395} text={'Гипогликемия'} textPosition={'top'} size={15}/>
					<Point x={485} y={500} text={'Осложнения СД'} textPosition={'top'} size={10}/>
					<Point x={830} y={485} text={'СС риски'} textPosition={'top'} size={5}/>
				</div>
				<div className="Sun"> </div>
				<Arrow position='bottom' dataAlt={'1'}/>
			</div>
		</>
	);
};

export default FirstPage;