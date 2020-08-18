import React from "react";

const GraphArrow = ({position, size, rot, width = 2, alt = ""}) => {
	const style = {
		top: position.top,
		left: position.left,
		width: size,
		height: size,
		transform: `rotate(${rot}deg)`
	};

	return (
		<svg alt={alt} className="Graph-Arrow" style={style} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 100">
			<defs>
				<marker id="arrowhead" markerWidth="10" markerHeight="7"
				        refX="0" refY="3.5" orient="auto" fill="#fff">
					<polygon points="0 0, 10 3.5, 0 7" />
				</marker>
			</defs>
			<line x1="0" y1="50" x2="250" y2="80" stroke="#fff"
			      strokeWidth={width} markerEnd="url(#arrowhead)" />
		</svg>
	);
};

export default GraphArrow