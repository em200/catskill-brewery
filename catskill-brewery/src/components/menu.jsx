import React from 'react';

function Menu(props) {
	return (
		<svg
			className={props.className}
			height={props.height}
			width={props.width}
			viewBox="0 0 20 20"
		></svg>
	);
}

export default Menu;
