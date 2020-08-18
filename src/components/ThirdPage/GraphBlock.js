import React from "react";

const GraphBlock = ({position, width, height, text, align = 'center', borders = true, fontSize = '20pt', header = ""}) => {
	const style = {
		left: position.left,
		top: position.top,
		width: width,
		height: height,
		border: borders ? '1px solid white' : 'none',
		fontSize: fontSize,
		textAlign: align
	};

	return (
		<div className={"Graph-Block"} style={style}>
			<h3>{header}</h3>
			{text}
		</div>
	);
};

export default GraphBlock