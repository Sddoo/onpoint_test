import React from "react";

const GraphNode = ({align = "center", position, img, capture, text, textPosition, width, wrapSize = '100px', nowrap = false}) => {
	let flexDirection, nodeTextStyle = "Graph-NodeText";

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

	const nodeStyle = {
		flexDirection: flexDirection,
		top: position.top,
		left: position.left,
		textAlign: align
	};
	
	if (nowrap)
		nodeTextStyle += " nowrap";

	return (
		<div className="Graph-Node" style={nodeStyle}>
			<div className={nodeTextStyle}><h3>{capture}</h3>{text}</div>
			<div className="Graph-NodeImage" style={{width: wrapSize, height: wrapSize, borderRadius: wrapSize}}>
				<img style={{width: width}} src={img} alt=""/>
			</div>
		</div>
	);
};

export default GraphNode